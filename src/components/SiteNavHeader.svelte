<script>
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';
  import Hamburger from '@icons/Hamburger.svelte'; // Ensure this path is correct
  import ForwardArrow from '@icons/ForwardArrow.svelte';
  import { slide } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { externalLinks } from '@content/constants';
  import { AccordionItem, Accordion } from 'flowbite-svelte';
  import Icon from '@iconify/svelte';

  let isOpen = false;

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

  const handleClickOutside = (event) => {
    const nav = document.getElementById('header');
    if (nav && !nav.contains(event.target)) {
      isOpen = false;
    }
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

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
  <nav>
    <div class="flex flex-row justify-between items-center w-full py-2 sm:py-4 md:gap-4 lg:gap-8 px-16">
      <a href="/">
        <span
          class="tracking-widest leading-relaxed sm:leading-snug text-base sm:text-xl text-white font-colossalis whitespace-nowrap bg-gradient-to-r from-white via-slate-50 to-slate-100 inline-block text-transparent bg-clip-text">
          U.S. MARINE CORPS<br />SOFTWARE FACTORY
        </span>
      </a>
      {#if isOpen}
        <ButtonCustom
          color="white"
          size="md"
          class="px-2 py-1 text-xs sm:px-4 sm:text-base ml-auto hidden sm:block"
          link={externalLinks.recruitingApplication}>GET IN TOUCH</ButtonCustom>
      {/if}
      <div class="self-center scale-50">
        <Hamburger
          bind:isOpen
          class="bg-zinc-200" />
      </div>
    </div>
    {#if isOpen}
      <div
        class="absolute bg-custom-gradient-blue-header px-16 w-full sm:h-auto h-screen"
        transition:fadeSlide={{ duration: 200 }}>
        <div class="flex justify-center">
          <a
            href={externalLinks.recruitingApplication}
            class="m-auto sm:hidden underline py-4 text-mcswf-gold">APPLY NOW</a>
        </div>

        <div class="hidden sm:grid sm:grid-cols-4 py-4 gap-4 lg:gap-4 md:pr-12 lg:pr-32 xl:pr-64">
          {#each dropdownLinks as link}
            <div class="col-span-1 tracking-wide">
              <div class="text-lg font-bold bg-gradient-to-r from-white via-slate-50 to-slate-100 inline-block text-transparent bg-clip-text">{link.text}</div>
              {#if link.subLinks}
                <ul class="text-base">
                  {#each link.subLinks as subLink}
                    <li>
                      <a
                        href={subLink.url}
                        class="hover:text-mcswf-gold hover:underline underline-offset-4"
                        >{subLink.text}
                        <ForwardArrow />
                      </a>
                    </li>
                  {/each}
                </ul>
              {/if}
            </div>
          {/each}
        </div>
        <div class="block sm:hidden py-10 text-white fill-whith">
          <Accordion flush>
            {#each dropdownLinks as link}
              <AccordionItem
                borderBottomClass="none"
                paddingFlush="none">
                <span
                  slot="header"
                  class="text-white text-[20px] py-2 hover:cursor-pointer hover:opacity-85">{link.text}</span>
                <Icon
                  slot="arrowdown"
                  class="text-white"
                  icon="mdi:plus" />
                <div
                  slot="arrowup"
                  class="text-white font-bold mr-1">
                  -
                </div>

                {#if link.subLinks}
                  <ul class="text-base">
                    {#each link.subLinks as subLink}
                      <li class="p-1 hover:cursor-pointer">
                        <a
                          href={subLink.url}
                          class="hover:text-mcswf-gold hover:underline underline-offset-4 mx-6 text-white"
                          >{subLink.text}
                          <ForwardArrow />
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
    {/if}
  </nav>
</header>
