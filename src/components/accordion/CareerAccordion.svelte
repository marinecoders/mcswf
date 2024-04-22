<script>
  export let open = false
  import { slide } from 'svelte/transition'
  import Accordion from './CareerAccordionSection.svelte'
  const handleClick = () => (open = !open)
</script>

<Accordion isStart>
	<span slot="step">STEP 1</span>
    <span slot="head">Apply</span>
	<div slot="details">
	</div>
</Accordion>

<Accordion isMiddle>
	<span slot="step">STEP 2</span>
    <span slot="head">Conduct Interview</span>
	<div slot="details">
		<p>
            What to expect during interview The interview is conducted in two parts: behavioral and technical. These interviews occur on separate days to provide time for the second interviewer to observe the first interview. We divide the interview into two parts because we have observed that it boosts the applicant's confidence, leading to greater openness during the second interview.What to expect during interview· Each interview lasts for 30-45 minutes. To ensure accurate capture, we record the audio, video, and transcript. This enables us to reference the interviews during the selection process.What happens after the interview· Following the interview, Marines will receive information on the expected timeframe for receiving the results, whether it be selection or non-selection. Following the interview, Marines will receive information on the expected timeframe for receiving the results, whether it be selection or non-selection
		</p>
	</div>
</Accordion>

<Accordion isMiddle>
	<span slot="step">STEP 3</span>
    <span slot="head">Receive Orders</span>
	<div slot="details">
		<p>
            When to expect PCS.· As the Technical Accelerator occurs biannually in February and August, Marines can anticipate receiving PCS orders at the start of January or July.Onboarding:· Upon receiving the selection notification and orders, the Marine will stay in weekly contact with staff members from the Marine Corps Software Factory, Austin Community College, and Army Software Factory until the start date of the Technical Accelerator. They will receive guidance throughout the onboarding process to prevent any issues during check-in. Onboarding will cover everything from medical, pay, housing, college enrollment, etc.
		</p>
	</div>
</Accordion>

<Accordion isEnd>
	<span slot="step">STEP 4</span>
    <span slot="head">Training</span>
	<div slot="details">
		<p>
            What to expect after PCS Marines selected to attend the MCSWF will undergo a three-year program consisting of three phases: a technical accelerator, one-to-one pairing enablement, and on-site utilization. For the first four months, Marines will attend a technical accelerator to establish a baseline skillset. Then, Marines will work one-to-one with technical experts from industry while solving real Marine problem sets. Marines who successfully complete the enablement phase will receive the 0673 Necessary Military Occupational Specialty (MOS) (Application Developer). Marines will spend the final 24 months in a utilization tour building Marine Corps software solutions while continuing to advance their skillsets.		</p>
	</div>
</Accordion>