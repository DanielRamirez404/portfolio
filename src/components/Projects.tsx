import { TranslucidButton } from "./reusables/buttons";

import apoloImg from '#assets/apolo-ugma.png';
import asiaBarImg from '#assets/asia-bar.png';
import woollyBreakoutImg from '#assets/woolly-breakout.png';
import chessImg from '#assets/chess.png';
import libraryImg from '#assets/library.png';

import { cn } from "#lib/utils";
import { Badge } from "./ui/badge";
import { AnimatedGradientText } from "./ui/animated-gradient-text";

export function Projects() {

  type Project = {
    name: string;
    description: string;
    type: 'Project' | 'Freelance' | 'University';
    priority: 'high' | 'low';
    img: string;
    github?: string;
    stack: string[];
  };

  const projects: Project[] = [

    {
      name: 'Apolo UGMA',
      type: 'Freelance',
      priority: 'high',
      description: "UX-focused automatic student enrollment projection & friendly academic scheduling web app for the UGMA university",
      img: apoloImg,
      stack: ["Next.js", "TypeScript", "Tailwind", "Tanstack Query", "Zod", "Shadcn"],
    },

    {
      name: 'Asia Bar Restaurant Web',
      type: 'Freelance',
      priority: 'high',
      description: "Sales management & ticket generation system for a local Asian restaurant",
      img: asiaBarImg,
      stack: ["Node.js", "Express.js", "JWT", "MariaDB", "React", "JavaScript", "CSS"],
    },

    {
      name: 'Woolly Breakout',
      type: 'Project',
      priority: 'high',
      description: "2D real-time local multiplayer cross-platform game built with client-server architecture and TCP sockets",
      img: woollyBreakoutImg,
      stack: ["C++20", "SDL2", "Boost.Asio", "CMake"],
    },

    {
      name: 'The Best Chess Clone',
      type: 'Project',
      priority: 'low',
      description: "Cross-platform chess clone integrating a custom bot made with a minmax backtracking AI algorithm",
      img: chessImg,
      stack: ["C++20", "SDL2", "CMake"],
    },

    {
      name: 'Library Management System',
      type: 'University',
      priority: 'low',
      description: "Circulation loans management system built for the Julián Temístocles Maza public library",
      img: libraryImg,
      stack: ["React", "JavaScript", "Tailwind"],
    },
  ];

  return (
    <div className="min-h-screen relative flex flex-col w-full items-center gap-3 pt-[10vh]">
      <div className="w-[95%] lg:w-[70%] flex flex-col items-center justify-center max-w-200 gap-8 px-5">
        <h3 className="text-3xl font-semibold self-start">
          Projects
        </h3>

        <div className="w-full flex flex-row flex-wrap gap-10 items-center justify-center">
          {projects.map(({ name, img, type, priority, description, stack }) => (
            <TranslucidButton
              key={name}
              className={cn(
                "relative w-full md:w-75 flex flex-col gap-5 items-start"
              )}
              shine={false}
            >

              <div className="w-full flex flex-col items-center gap-1">

                <div className="flex w-full flex-row justify-center bg-charcoal-blue-900 overflow-hidden rounded-2xl">
                  <img
                    className="h-50 w-auto"
                    src={img}
                    fetchPriority={priority}
                  />
                </div>


                <div className="w-full flex flex-row items-center justify-between">
                  <h4 className="text-lg truncate">
                    {name}
                  </h4>

                  {
                    type === "Freelance" ? (
                      <div className="group relative rounded-full px-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                        <span
                          className={cn(
                            "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit]",
                            "bg-linear-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-size[300%_100%] p-px"
                          )}
                          style={{
                            WebkitMask:
                              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                          }}
                        />
                        <AnimatedGradientText className="text-xs">
                          Freelance
                        </AnimatedGradientText>
                      </div>
                    ) : (
                      <div className="group relative rounded-full px-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
                        <span
                          className={cn(
                            "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit]",
                            "bg-linear-to-r from-[#22d3ee]/50 via-[#2dd4bf]/50 to-[#22d3ee]/50 bg-size[300%_100%] p-px"
                          )}
                          style={{
                            WebkitMask:
                              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "subtract",
                            WebkitClipPath: "padding-box",
                          }}
                        />
                        <span className="text-xs text-bright-snow-200">
                          {type}
                        </span>
                      </div>
                    )
                  }
                </div>


                <p className="text-start font-normal text-xs">
                  {description}
                </p>


              </div>

              <div className="flex flex-row flex-wrap gap-x-2">
                {stack.map(technology => (
                  <Badge
                    key={name + technology}
                    variant="outline"
                    className="text-xs bg-transparent border-bright-snow-100 my-1"
                  >
                    {technology}
                  </Badge>
                ))}
              </div>


            </TranslucidButton>
          ))}
        </div>
      </div>

    </div>
  );
}
