"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface MenuCategory {
  id: number;
  label: string;
  description: string;
  items: MenuItem[];
}

interface MenuAccordionProps {
  categories: MenuCategory[];
  className?: string;
}

export default function MenuAccordion({ categories, className }: MenuAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {categories.map((category, index) => (
        <div
          key={category.id}
          className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Category Header */}
          <button
            onClick={() => toggleCategory(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{category.label}</h3>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 flex-shrink-0"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>

          {/* Category Content */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-6 border-t border-gray-100 bg-gray-50">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: itemIndex * 0.1 }}
                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        {/* Item Image */}
                        <div className="relative w-full aspect-[4/3] bg-gray-100">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Item Details */}
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                            <span className="text-lg font-semibold text-orange-600 ml-4 flex-shrink-0">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

