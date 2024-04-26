<script>
  import ButtonCustom from '../buttons/ButtonCustom.svelte'

  export let color = 'white' // white, yellow, red
  export let size = 'md' // xs, sm, md, lg, xl
  export let link = ''
  export let linkText = ''
  export let customClasses = ''
  export let disabled = false
  export let handleClick = null
</script>

<ButtonCustom {color} {size} {customClasses} {link} {disabled} {handleClick}>
  {linkText}
</ButtonCustom>
