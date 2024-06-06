<script>
  import { twMerge } from 'tailwind-merge';
  import { sizes } from '@icons/iconConfig';
  export let size = 'xs'; // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
</script>

<svg {...$$restProps} class={twMerge('shrink-0 inline-block fill-current', sizes[size], $$props.class)} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24">
  <g>
    <path d="M0,0h24v24H0V0z" fill="none" />
  </g>
  <g>
    <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12" />
  </g>
</svg>
