<script>
  import { LinkedIn } from '@icons/iconExports';
  import { externalLinks } from '@content/externalLinks';
  import MaxWidthContainer from '@components/sections/MaxWidthContainer.svelte';
  import McswfLogoAndText from '@components/logos/McswfLogoAndText.svelte';

  export let background = '';
  export let rounded = true;
</script>

<div class={background}>
  <footer
    class="pb-0 pt-6 lg:pb-2 blue-radial-gradient shadow shadow-stone-950"
    class:rounded-t-3xl={rounded}>
    <MaxWidthContainer>
      <!-- STANDARD FOOTER -->
      <div class="hidden lg:block container pb-28 mx-auto lg:py-8">
        <div class="flex justify-around py-4 border-b">
          <div class="flex w-2/5 align-middle mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
            <McswfLogoAndText displayImage={true} />
          </div>
          <div class="w-3/5">
            <h1 class="text-lg font-bold">VISION</h1>
            <p class="font-light">
              Create a world class Marine-led software development capability enabling Marine Corps modernization efforts by developing applications for commanders at the speed of operations,
              increasing lethality and readiness.
            </p>
          </div>
        </div>
        <div class="flex justify-around py-4 align-middle border-b">
          <div class="w-2/5">
            <a
              href={externalLinks.marinesDotCom}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
              <img
                style="fill: white;"
                src="/ega-full.svg"
                class="h-12 text-white"
                alt="MCSWF Logo" />
            </a>
          </div>
          <div class="w-3/5">
            <p class="font-light">
              Product of The Marine Corps Software Factory, which proudly sits within the <a
                href={externalLinks.deputyCommandantForInformation}
                target="_blank"
                rel="noopener noreferrer"
                class="underline text-mcswf-gold">Deputy Commandant for Information</a
              >.
            </p>
          </div>
        </div>
        <div class="flex justify-around items-center py-4 mb-8 border-b">
          <div class="w-2/5">
            <h1 class="mb-2 font-light text-xs">GET IN TOUCH</h1>
            <div class="flex justify-start">
              <a
                href={externalLinks.social.linkedIn}
                class="mr-4"
                target="_blank"
                rel="noopener noreferrer">
                <LinkedIn
                  size="lg"
                  primary="fill-linkedin-blue"
                  secondary="fill-white"
                  class="rounded-sm" />
              </a>
            </div>
          </div>
          <div class="w-3/5 font-light">
            <p>Interested in partnering with the Marine Corps Software Factory?</p>
            <p>
              Email us at <a
                href={`mailto:${externalLinks.mcswfEmail}?subject=${externalLinks.mcswfEmailSubject}`}
                target="_blank"
                rel="noopener noreferrer"
                class="underline text-mcswf-gold">{externalLinks.mcswfEmail}</a>
            </p>
          </div>
        </div>
        <div class="text-transparent">
          Proudly developed with<a
            class="underline ps-1"
            href="https://www.marforres.marines.mil/MIU/">Marine Innovation Unit</a>
        </div>
      </div>

      <!-- MOBILE FOOTER -->
      <div class="block lg:hidden container pb-32 mx-auto">
        <div class="flex justify-start py-4 border-b">
          <McswfLogoAndText displayImage={true} />
        </div>
        <div class="flex justify-start py-4 align-middle border-b">
          <a
            href={externalLinks.marinesDotCom}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
            <img
              style="fill: white;"
              src="/ega-full.svg"
              class="h-16 text-white"
              alt="MCSWF Logo" />
          </a>
        </div>
        <div class="flex justify-center py-4 border-b">
          <div class="w-full">
            <h1 class="text-lg font-bold">VISION</h1>
            <p class="font-light">
              Create a world class Marine-led software development capability enabling Marine Corps modernization efforts by developing applications for commanders at the speed of operations,
              increasing lethality and readiness.
            </p>
          </div>
        </div>
        <div class="flex justify-around py-4 border-b">
          <div class="w-full align-middle font-light">
            <p>Interested in partnering with the Marine Corps Software Factory?</p>
            <p>
              Email us at <a
                href={`mailto:${externalLinks.mcswfEmail}?subject=${externalLinks.mcswfEmailSubject}`}
                target="_blank"
                rel="noopener noreferrer"
                class="underline text-mcswf-gold">mcswf@usmc.mil</a>
            </p>
          </div>
        </div>
        <div class="flex justify-center py-4">
          <div class="w-full">
            <p class="font-light">
              Product of The Marine Corps Software Factory, which proudly sits within the <span class="underline text-mcswf-gold">Deputy Commandant for Information.</span>
            </p>
          </div>
        </div>
        <h1 class="flex justify-start py-4">GET IN TOUCH</h1>
        <div class="flex justify-start text-sm font-light gap-4">
          <a
            href={externalLinks.social.linkedIn}
            class="mr-4"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedIn
              size="lg"
              primary="fill-linkedin-blue"
              secondary="fill-white"
              class="rounded-sm" />
          </a>
        </div>
      </div>
    </MaxWidthContainer>
  </footer>
</div>
