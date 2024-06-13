<script>
  import { AccordionItem, Accordion, Dropdown } from 'flowbite-svelte';
  import { slide, fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';
  import Hamburger from '@icons/Hamburger.svelte';
  import ForwardArrow from '@icons/ForwardArrow.svelte';
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
  class="w-full sticky top-0 z-30 bg-custom-gradient-blue-header shadow shadow-stone-950">
  <div class="flex flex-row justify-between items-center w-full py-2 sm:py-4 md:gap-4 lg:gap-8 px-8 sm:px-16">
    <a href="/">
      <span
        class="tracking-widest leading-relaxed sm:leading-snug text-[15px] sm:text-[21px] text-white font-colossalis whitespace-nowrap bg-gradient-to-r from-white via-slate-50 to-slate-100 inline-block text-transparent bg-clip-text">
        U.S. MARINE CORPS<br />SOFTWARE FACTORY
      </span>
    </a>
    {#if dropdownOpen}
      <div
        class="ml-auto hidden md:block"
        transition:fade={{ duration: 300, easing: quintOut }}>
        <ButtonCustom
          color="white"
          size="md"
          class="px-2 py-1 text-xs sm:px-4 sm:text-base ml-auto hidden md:block"
          link={`mailto:${externalLinks.mcswfEmail}?subject=${externalLinks.mcswfEmailSubject}`}
          externalLink={true}>GET IN TOUCH</ButtonCustom>
      </div>
    {/if}
    <Hamburger
      bind:open={dropdownOpen}
      class="bg-zinc-200"
      id="site-header-hamburger" />
  </div>

  <Dropdown
    bind:open={dropdownOpen}
    triggeredBy="#site-header-hamburger"
    containerClass="bg-custom-gradient-blue-header px-8 sm:px-16 py-6 w-full rounded-t-none !top-[68px] md:!top-[87px] text-white">
    <div
      class="w-full"
      transition:fadeSlide={{ duration: 200 }}>
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
                class="font-bold text-2xl"
                transition:fly={{ duration: 200, x: 50, y: 5, opacity: 0.1 }}>
                +
              </div>
              <div
                slot="arrowup"
                class="font-bold text-2xl"
                transition:fly={{ duration: 200, x: -50, y: 5, opacity: 0.1 }}>
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
    </div>
  </Dropdown>
</header>
