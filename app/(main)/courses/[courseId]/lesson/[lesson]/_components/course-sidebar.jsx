"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import { PlayCircle } from "lucide-react";
import { Lock } from "lucide-react";
import { ReviewModal } from "./review-modal";
import { CourseProgress } from "@/components/globals/CourseProgress/CourseProgress";
import { ScrollArea } from "@/components/ui/scroll-area";

export const CourseSidebar = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const isActive = true;
  const isCompleted = true;
  return (
    <>
      <div className="flex flex-col border shadow-sm">
        <div className="flex flex-col p-3 border-b sm:p-6">
          <h1 className="text-base font-semibold">Reactive Accelerator</h1>
          {/* Check purchase */}
          {
            <div className="mt-3">
              <CourseProgress variant="success" value={80} />
            </div>
          }
        </div>
        <ScrollArea className="h-[18rem] md:h-[25rem]">
          <Accordion
            defaultValue="item-1"
            type="single"
            collapsible
            className="w-full px-3 sm:px-6"
          >
            {/* item */}
            <AccordionItem className="border-0" value="item-1">
              <AccordionTrigger>Introduction </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col w-full gap-3">
                  {/* active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      isActive && "text-slate-700  hover:text-slate-700",
                      isCompleted && "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <CheckCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700",
                          isCompleted && "text-emerald-700"
                        )}
                      />
                      Introduction
                    </div>
                  </button>
                  {/* not active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <PlayCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                  {/* lock*/}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <Lock
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* item ends */}

            {/* item */}
            <AccordionItem className="border-0" value="item-2">
              <AccordionTrigger>Foundational React JS </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col w-full gap-3">
                  {/* active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      isActive && "text-slate-700  hover:text-slate-700",
                      isCompleted && "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <CheckCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700",
                          isCompleted && "text-emerald-700"
                        )}
                      />
                      Introduction
                    </div>
                  </button>
                  {/* not active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <PlayCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                  {/* lock*/}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <Lock
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* item ends */}

            {/* item */}
            <AccordionItem className="border-0" value="item-3">
              <AccordionTrigger>Advanced React JS </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col w-full gap-3">
                  {/* active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      isActive && "text-slate-700  hover:text-slate-700",
                      isCompleted && "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <CheckCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700",
                          isCompleted && "text-emerald-700"
                        )}
                      />
                      Introduction
                    </div>
                  </button>
                  {/* not active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <PlayCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                  {/* lock*/}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <Lock
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* item ends */}

            {/* item */}
            <AccordionItem className="border-0" value="item-4">
              <AccordionTrigger>Project: Ecommerce Application</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col w-full gap-3">
                  {/* active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      isActive && "text-slate-700  hover:text-slate-700",
                      isCompleted && "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <CheckCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700",
                          isCompleted && "text-emerald-700"
                        )}
                      />
                      Introduction
                    </div>
                  </button>
                  {/* not active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <PlayCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                  {/* lock*/}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <Lock
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* item ends */}

            {/* item */}
            <AccordionItem className="border-0" value="item-3">
              <AccordionTrigger>Advanced React JS </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col w-full gap-3">
                  {/* active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      isActive && "text-slate-700  hover:text-slate-700",
                      isCompleted && "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <CheckCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700",
                          isCompleted && "text-emerald-700"
                        )}
                      />
                      Introduction
                    </div>
                  </button>
                  {/* not active and completed */}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600 ",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <PlayCircle
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                  {/* lock*/}
                  <button
                    type="button"
                    className={cn(
                      "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  transition-all hover:text-slate-600",
                      false && "text-slate-700  hover:text-slate-700",
                      isCompleted &&
                      false &&
                      "text-emerald-700 hover:text-emerald-700"
                    )}
                  >
                    <div className="flex items-center gap-x-2">
                      <Lock
                        size={16}
                        className={cn(
                          "text-slate-500",
                          isActive && "text-slate-700"
                        )}
                      />
                      What is React ?
                    </div>
                  </button>
                </div>
              </AccordionContent>
            </AccordionItem>
            {/* item ends */}
          </Accordion>
        </ScrollArea>

        <div className="px-3 py-3 space-y-3 sm:px-6">
          <Button className="w-full">
            <>Download Certificate</>
          </Button>

          <Button
            onClick={() => setIsReviewModalOpen(true)}
            variant="outline"
            className="w-full"
          >
            Give Review
          </Button>
        </div>
      </div>
      <ReviewModal open={isReviewModalOpen} setOpen={setIsReviewModalOpen} />
    </>
  );
};
