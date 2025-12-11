"use client";

import { Footer, FooterBrand, FooterTitle, FooterLinkGroup, FooterLink } from "flowbite-react";
import Image from "next/image";
import { bbq } from "@/config/bbq.config";

export function FooterComponent() {
  return (
    <Footer container className="bg-[#8B2E26] border-t border-[#8B2E26] rounded-none w-full" style={{ backgroundColor: '#8B2E26' }}>
      <div className="w-full px-[60px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <FooterBrand href="/">
              <Image
                src="/images/logo_black.png"
                alt={bbq.name}
                width={410}
                height={137}
                className="h-[137px] w-auto"
                style={{ filter: 'brightness(0) saturate(100%) invert(94%) sepia(8%) saturate(1000%) hue-rotate(330deg) brightness(95%) contrast(90%)' }}
              />
            </FooterBrand>
          </div>

          {/* Visit Us */}
          <div>
            <FooterTitle 
              title="Visit us" 
              className="text-[#F1E7DA]"
              style={{
                fontFamily: 'Anton',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '1.2em'
              }}
            />
            <FooterLinkGroup col className="mt-4">
              <p className="text-[#F1E7DA] mb-2">
                {bbq.primaryLocation.address}
              </p>
              <p className="text-[#F1E7DA]">
                {bbq.primaryLocation.city}, {bbq.primaryLocation.state} {bbq.primaryLocation.zip}
              </p>
            </FooterLinkGroup>
          </div>

          {/* Our Hours */}
          <div>
            <FooterTitle 
              title="Our hours" 
              className="text-[#F1E7DA]"
              style={{
                fontFamily: 'Anton',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '1.2em'
              }}
            />
            <FooterLinkGroup col className="mt-4">
              {bbq.hours.map((hour, index) => (
                <p key={index} className="text-[#F1E7DA] text-sm">
                  <span className="font-semibold">{hour.label}:</span> {hour.value}
                </p>
              ))}
            </FooterLinkGroup>
          </div>

          {/* Keep in Touch */}
          <div>
            <FooterTitle 
              title="Keep in touch" 
              className="text-[#F1E7DA]"
              style={{
                fontFamily: 'Anton',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '1.2em'
              }}
            />
            <FooterLinkGroup col className="mt-4">
              <FooterLink
                href={bbq.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F1E7DA]"
              >
                Instagram
              </FooterLink>
              {bbq.facebookUrl && (
                <FooterLink
                  href={bbq.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#F1E7DA]"
                >
                  Facebook
                </FooterLink>
              )}
            </FooterLinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}

