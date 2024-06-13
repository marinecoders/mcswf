<script>
  import { twMerge } from 'tailwind-merge';
  import { sizes } from '@icons/iconConfig';

  export let size = 'md'; // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  export let primary = 'fill-current';
  export let secondary = 'fill-current';
  export let ariaLabel = 'linkedin logo';
</script>

<svg
  {...$$restProps}
  viewBox="0 0 60 60"
  fill="none"
  aria-label={ariaLabel}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M60 51.6667C60 56.27 56.27 60 51.6667 60H8.33333C3.73167 60 0 56.27 0 51.6667V8.33333C0 3.73 3.73167 0 8.33333 0H51.6667C56.27 0 60 3.73 60 8.33333V51.6667Z"
    class={primary} />
  <path
    d="M10 21.6667H18.3333V50H10V21.6667ZM14.1417 18.3333H14.095C11.6083 18.3333 10 16.48 10 14.165C10 11.8 11.6583 10 14.19 10C16.725 10 18.2867 11.8 18.3333 14.165C18.3333 16.4783 16.725 18.3333 14.1417 18.3333ZM50 50H41.6667V34.835C41.6667 31.1717 39.625 28.6717 36.3467 28.6717C33.845 28.6717 32.4917 30.3583 31.835 31.9883C31.595 32.5717 31.6667 34.185 31.6667 35V50H23.3333V21.6667H31.6667V26.0267C32.8683 24.1667 34.75 21.6667 39.5633 21.6667C45.5267 21.6667 49.9983 25.4167 49.9983 33.79L50 50Z"
    class={secondary} />
</svg>
