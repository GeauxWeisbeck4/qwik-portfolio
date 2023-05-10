import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

const coverImage =
  "https://res.cloudinary.com/tar-heel-dev-studio/image/upload/v1677220638/avatar_fvxxbc.png";

export default component$(() => {
  return (
    <section
      class={`bg-gradient-to-b md:bg-gradient-to-r from-white via-purple-50 to-sky-100 dark:bg-none mt-[-72px]`}
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 md:flex md:h-screen 2xl:h-auto pt-[72px]">
        <div class="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div class="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Portfolio website for{" "}
                <span class="text-[#039de1]">Andrew Weisbeck</span>{" "}
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
                  <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2 hover:text-[#039de1] mr-2">
                    GeauxWeisbeck4.dev
                  </span>
                  is a website made with the Qwik and Qwik City Framework paired
                  with the Builder.io CMS.
                </p>
                <div class="max-w-xs sm:max-w-md flex flex-nowrap flex-col sm:flex-row gap-4 m-auto md:m-0 justify-center md:justify-start">
                  <div class="flex w-full sm:w-auto">
                    <a
                      class="btn btn-primary sm:mb-0 w-full"
                      href="https://geauxweisbeck4.dev/contact-me"
                      target="_blank"
                      rel="noopener"
                    >
                      Hire Me
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
                    <button class="btn w-full bg-gray-50 dark:bg-transparent">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="block md:flex items-center flex-1">
            <div class="relative m-auto max-w-4xl">
              <Image
                src={coverImage}
                layout="constrained"
                width={493}
                height={616}
                alt="Andrew Weisbeck"
                class="mx-auto w-full rounded-md md:h-full drop-shadow-2xl bg-gray-400 dark:bg-slate-700"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
