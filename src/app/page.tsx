"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import EditableText from "@/components/editable-text"

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = 4

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-300 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-pink-flower-cute-png-image_13522448.png"
          alt="Flowers"
          width={200}
          height={200}
          className="absolute top-0 left-0 opacity-70 w-[100px] md:w-[150px] lg:w-[200px]"
        />
        <Image
          src="https://png.pngtree.com/png-clipart/20231109/original/pngtree-pink-flower-cute-png-image_13522448.png"
          alt="Flowers"
          width={200}
          height={200}
          className="absolute bottom-0 right-0 opacity-70 w-[100px] md:w-[150px] lg:w-[200px]"
        />
        <Image
          src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-pink-butterfly-flying-png-image_11549629.png"
          alt="Butterfly"
          width={80}
          height={80}
          className="absolute top-1/4 right-[5%] md:right-[10%] animate-float w-[40px] md:w-[60px] lg:w-[80px]"
        />
        <Image
          src="https://png.pngtree.com/png-vector/20240125/ourmid/pngtree-pink-butterfly-flying-png-image_11549629.png"
          alt="Butterfly"
          width={60}
          height={60}
          className="absolute bottom-1/3 left-[5%] md:left-[10%] animate-float-delay w-[30px] md:w-[45px] lg:w-[60px]"
        />
        <div className="absolute top-[10%] md:top-[20%] right-1/4 w-[100px] md:w-[150px] lg:w-[200px] h-4 md:h-6 bg-pink-300 rounded-full transform -rotate-12 opacity-60"></div>
        <div className="absolute bottom-[10%] md:bottom-[20%] left-1/4 w-[100px] md:w-[150px] lg:w-[200px] h-4 md:h-6 bg-pink-300 rounded-full transform rotate-12 opacity-60"></div>
      </div>

      {/* Card container */}
      <div className="relative w-full max-w-2xl aspect-[3/4] bg-white rounded-lg shadow-2xl overflow-hidden mx-4 md:mx-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{
              rotateY: currentPage > 0 ? -90 : 90,
              x: currentPage > 0 ? 100 : -100,
              opacity: 0,
            }}
            animate={{
              rotateY: 0,
              x: 0,
              opacity: 1,
            }}
            exit={{
              rotateY: currentPage > 0 ? 90 : -90,
              x: currentPage > 0 ? -100 : 100,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            className="bg-gradient-to-b from-pink-50 to-pink-100"
          >
            {currentPage === 0 && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-pink-50">
                <div className="text-center">
                  <EditableText
                    defaultText="Happy Mother's Day"
                    className="text-4xl md:text-5xl font-bold text-pink-600 mb-6"
                  />
                  <div className="w-48 md:w-64 h-48 md:h-64 mx-auto my-6 relative">
                    <Image
                      src="/mom.jpg"
                      alt="Mom"
                      width={300}
                      height={300}
                      className="rounded-full border-4 border-pink-300 object-cover w-full h-full"
                    />
                  </div>
                  <EditableText
                    defaultText="To the World's Best Mom"
                    className="text-2xl md:text-3xl font-semibold text-pink-500 mt-4"
                  />
                  <EditableText
                    defaultText="With all my love"
                    className="text-xl text-pink-400 mt-2"
                  />
                </div>
              </div>
            )}

            {currentPage === 1 && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8  mt-12 pt-12  pb-20 bg-pink-50">
                <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                  <div className="flex-shrink-0 w-32 m-12 md:w-48 h-24 md:h-32 max-w-xs mb-4 md:mb-0 md:mr-6 relative">
                    <Image
                      src="/test-2.jpg"
                      alt="Memory with Mom"
                      width={192}
                      height={128}
                      className="rounded-lg border-4  border-pink-300 object-cover mx-auto"
                    />
                  </div>
                  <div className="flex-1 flex flex-col mt-22 justify-center">
                    <EditableText
                      defaultText="Thank You"
                      className="text-3xl md:text-4xl font-bold text-pink-600 mb-6"
                    />
                    <EditableText
                      defaultText="For all the times you've been there for me, for your endless love and support. No job is tougher, no love is greater. You wear a hundred hats, but 'Mom' will always be your most important one."
                      className="text-lg pb-12  text-pink-700"
                      multiline={true}
                    />
                  </div>
                </div>
              </div>
            )}

            {currentPage === 2 && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-pink-50">
                <div className="text-center max-w-2xl w-full mx-auto flex flex-col items-center">
                  <EditableText
                    defaultText="Our Memories"
                    className="text-3xl md:text-4xl font-bold text-pink-600 mb-10"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 w-full max-w-lg">
                    <div className="flex items-center justify-center">
                      <div className="w-32 md:w-40 h-32 md:h-40 bg-white rounded-xl border-4 border-pink-300 shadow-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src="/mom-1-1.jpg"
                          alt="Memory 1"
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-32 md:w-40 h-32 md:h-40 bg-white rounded-xl border-4 border-pink-300 shadow-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src="/mom-1-2.jpg"
                          alt="Memory 2"
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-32 md:w-40 h-32 md:h-40 bg-white rounded-xl border-4 border-pink-300 shadow-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src="/mom-1-3.jpg"
                          alt="Memory 3"
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-32 md:w-40 h-32 md:h-40 bg-white rounded-xl border-4 border-pink-300 shadow-lg overflow-hidden flex items-center justify-center">
                        <Image
                          src="/mom-1-4.jpg"
                          alt="Memory 4"
                          width={160}
                          height={160}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                  <EditableText
                    defaultText="Cherishing all our special moments together"
                    className="text-xl text-pink-500 mt-2 text-center"
                  />
                </div>
              </div>
            )}

            {currentPage === 3 && (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-pink-50">
                <div className="text-center max-w-md mx-auto flex flex-col items-center">
                  <EditableText
                    defaultText="I Love You Mummy"
                    className="text-3xl md:text-4xl font-bold text-pink-600 mb-3"
                  />
                  <div className="w-48 md:w-72 h-48 md:h-72 mx-auto my-6 relative">
                    <Image
                      src="/best-mom.jpg"
                      alt="#1 Mom Trophy"
                      width={288}
                      height={288}
                      className="object-contain mx-auto w-full h-full"
                    />
                  </div>
                  <EditableText
                    defaultText="You deserve the world's best title because you truly are the #1 Mom. Happy Mother's Day!"
                    className=" mt-6 text-xl text-pink-700  text-center"
                    multiline={true}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="bg-white/80 hover:bg-white border-pink-300 text-pink-600"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${currentPage === i ? "bg-pink-500" : "bg-pink-300"}`} />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-white/80 hover:bg-white border-pink-300 text-pink-600"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </main>
  )
}
