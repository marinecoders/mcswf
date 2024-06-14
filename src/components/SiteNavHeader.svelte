<script>
  import { AccordionItem, Accordion, Dropdown } from 'flowbite-svelte';
  import { slide, fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import MaxWidthContainer from '@components/sections/MaxWidthContainer.svelte';
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';
  import Hamburger from '@icons/Hamburger.svelte';
  import ForwardArrow from '@icons/ForwardArrow.svelte';
  import McswfLogoAndText from '@components/logos/McswfLogoAndText.svelte';
  import { externalLinks } from '@content/externalLinks';

  let dropdownOpen = false;

  const dropdownLinks = [
    {
      text: 'PRODUCTS',
      url: '/products',
      image: '/images/products_card.png',
      subLinks: [
        { url: '/products', text: 'OVERVIEW' },
        { url: '/products/sparta', text: 'SPARTA' },
        { url: '/products/my-career', text: 'MyCareer' },
        { url: '/products/SnapDB', text: 'Snap Database' },
      ],
    },
    {
      text: 'ABOUT',
      image: '/images/about_card.png',
      url: '/about',
      subLinks: [{ url: '/about', text: 'WHO WE ARE' }],
    },
    {
      text: 'CAREER',
      image: '/images/training_career_card.png',
      url: '/career',
      subLinks: [
        { url: '/career', text: 'TRAINING' },
        { url: '/roles', text: 'ROLES' },
      ],
      titleClasses: 'text-sm lg:text-xl',
    },
    {
      text: 'CONTACT',
      image: '/images/contact_card.png',
      url: '/contactUs',
      subLinks: [
        { url: '/contactUs/applyNow', text: 'APPLY NOW' },
        { url: '/contactUs/proposeApp', text: 'PROPOSE AN APP' },
        { url: '/contactUs/getInTouch', text: 'GET IN TOUCH' },
      ],
    },
  ];

  const fadeSlide = (node, options) => {
    const slideTrans = slide(node, options);
    return {
      duration: options.duration,
      css: (t) => `${slideTrans.css(t)} opacity: ${t}`,
    };
  };
</script>

<header
  id="header"
  class="w-full sticky top-0 z-30 bg-custom-gradient-blue-header shadow-sm shadow-stone-950">
  <MaxWidthContainer>
    <div class="flex flex-row justify-between items-center w-full py-2 sm:py-4 md:gap-4 lg:gap-8">
      <McswfLogoAndText displayImage={false} />
      {#if dropdownOpen}
        <div
          class="ml-auto hidden md:block"
          transition:fade={{ duration: 300, easing: quintOut }}>
          <ButtonCustom
            color="white"
            size="md"
            class="px-2 py-1 text-xs sm:px-4 sm:text-base ml-auto hidden md:block"
            link="/contactUs/getInTouch"
            externalLink={true}>GET IN TOUCH</ButtonCustom>
        </div>
      {/if}
      <Hamburger
        bind:open={dropdownOpen}
        class="bg-zinc-200"
        id="site-header-hamburger" />
    </div>
  </MaxWidthContainer>

  <Dropdown
    bind:open={dropdownOpen}
    triggeredBy="#site-header-hamburger"
    containerClass="bg-custom-gradient-blue-header py-6 w-screen rounded-t-none !top-[68px] md:!top-[87px] text-white">
    <div
      class="w-screen"
      transition:fadeSlide={{ duration: 200 }}>
      <MaxWidthContainer>
        <!-- Desktop Nav Header -->
        <div class="hidden md:grid md:grid-cols-4 gap-2 md:gap-4 md:pr-12 lg:pr-32 xl:pr-64">
          {#each dropdownLinks as link}
            <div class="col-span-1 tracking-wide">
              <h2 class="inline-block text-lg lg:text-xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-200 text-transparent bg-clip-text pb-2">{link.text}</h2>
              {#if link.subLinks}
                <ul class="text-base lg:text-lg font-light">
                  {#each link.subLinks as subLink}
                    <li class="p-1">
                      <a
                        href={subLink.url}
                        class="relative inline-block overflow-hidden border-b-2 border-transparent hover:text-mcswf-gold tracking-wider group whitespace-nowrap">
                        <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-mcswf-gold transition-all duration-200 group-hover:w-full">{subLink.text}</span>
                        <span>{subLink.text}</span>
                        <ForwardArrow class="ease transition-all duration-200 group-hover:translate-x-2 w-6" />
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        </div>
        <div class="flex justify-center">
          <a
            href={externalLinks.recruitingApplication}
            target="_blank"
            rel="noopener noreferrer"
            class="m-auto md:hidden underline underline-offset-2 text-mcswf-gold hover:text-mcswf-gold-dark">APPLY NOW</a>
        </div>
        <!-- Moble Nav Header -->
        <div class="block md:hidden py-4 text-white fill-whith">
          <Accordion flush>
            {#each dropdownLinks as link}
              <AccordionItem
                borderBottomClass="none"
                paddingFlush="none"
                textFlushDefault="text-white hover:text-zinc-200"
                textFlushOpen="text-mcswf-gold hover:text-mcswf-gold-dark"
                class="py-2">
                <h2
                  slot="header"
                  class="inline-block text-xl font-bold w-full">
                  {link.text}
                </h2>
                <div
                  slot="arrowdown"
                  class="font-bold text-2xl w-5"
                  transition:fly={{ duration: 200, x: -20, y: 0, opacity: 0.1 }}>
                  +
                </div>
                <div
                  slot="arrowup"
                  class="font-bold text-2xl w-5"
                  transition:fade={{ duration: 200 }}>
                  —
                </div>

                {#if link.subLinks}
                  <ul class="text-base text-white">
                    {#each link.subLinks as subLink}
                      <li class="py-2 pl-4">
                        <a
                          href={subLink.url}
                          class="relative inline-block overflow-hidden border-b-2 border-transparent hover:text-mcswf-gold tracking-wider group whitespace-nowrap">
                          <span class="ease absolute left-0 bottom-0 h-0 w-0 border-b-2 border-mcswf-gold transition-all duration-200 group-hover:w-full">{subLink.text}</span>
                          <span>{subLink.text}</span>
                          <ForwardArrow class="ease transition-all duration-200 group-hover:translate-x-2 w-6" />
                        </a>
                      </li>
                    {/each}
                  </ul>
                {/if}
              </AccordionItem>
            {/each}
          </Accordion>
        </div>
      </MaxWidthContainer>
    </div>
  </Dropdown>
</header>
