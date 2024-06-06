<script>
  import ButtonCustom from '@components/buttons/ButtonCustom.svelte';
  import { externalLinks } from '@content/constants';
  import Hamburger from '@icons/Hamburger.svelte'; // Ensure this path is correct
  import ForwardArrow from '@icons/ForwardArrow.svelte';
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { onMount } from 'svelte';

  let isOpen = false;

  const dropdownLinks = [
    {
      text: "PRODUCTS",
      url: "/products",
      image: "/images/products_card.png",
      subLinks: [
        { url: "/products", text: "OVERVIEW" },
        { url: "/products/sparta", text: "SPARTA" },
        { url: "/products/my-career", text: "MyCareer" },
        { url: "/products/SnapDB", text: "Snap Database" }
      ]
    },
    {
      text: "ABOUT",
      image: "/images/about_card.png",
      url: "/about",
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
      subLinks: [{ url: '/who-we-are', text: 'WHO WE ARE' }],
    },
    {
      text: 'CAREER',
      image: '/images/training_career_card.png',
      url: '/career',
      subLinks: [
        { url: '/career', text: 'TRAINING' },
        { url: '/roles', text: 'ROLES' },
      ],
      titleClasses: "text-sm lg:text-xl"
    },
    {
      text: "CONTACT",
      image: "/images/contact_card.png",
      url: "/contact",
      subLinks: [
        { url: '/contact/get-in-touch', text: 'GET IN TOUCH' },
        { url: '/contact/request-a-demo', text: 'REQUEST A DEMO' },
        { url: '/contact/suggest-an-app', text: 'SUGGEST AN APP' },
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
</script>

<header id="header"
        class="w-full sticky top-0 z-30 bg-custom-gradient-blue-header">
  <nav>
    <div
      class="flex flex-row justify-between items-center w-full py-2 sm:py-4 md:gap-4 lg:gap-8 px-16">
      <a href="/">
        <span
          class="tracking-widest leading-relaxed sm:leading-snug text-base sm:text-xl text-white font-colossalis whitespace-nowrap bg-gradient-to-r from-white via-slate-50 to-slate-100 inline-block text-transparent bg-clip-text">
          U.S. MARINE CORPS<br />SOFTWARE FACTORY
        </span>
      </a>
      {#if isOpen}
        <ButtonCustom color="white" size="md" class="px-2 py-1 text-xs sm:px-4 sm:text-base ml-auto" link={externalLinks.recruitingApplication}>GET IN TOUCH</ButtonCustom>
      {/if}
      <div class="self-center scale-50">
        <Hamburger bind:isOpen class="bg-zinc-200" />
      </div>
    </div>
    {#if isOpen}
      <div class="absolute bg-custom-gradient-blue-header px-16 w-full" transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}>
        <div class="grid grid-cols-4 py-4 gap-1 sm:gap-2 lg:gap-4 md:pr-12 lg:pr-32 xl:pr-64">
          {#each dropdownLinks as link}
            <div class="col-span-1 tracking-wide">
              <div class="text-lg font-bold bg-gradient-to-r from-white via-slate-50 to-slate-100 inline-block text-transparent bg-clip-text">{link.text}</div>
              {#if link.subLinks}
                <ul class="text-base">
                  {#each link.subLinks as subLink}
                    <li>
                      <a href={subLink.url} class="hover:text-mcswf-gold hover:underline underline-offset-4"
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
      </div>
    {/if}
  </nav>
</header>
