<script lang="ts">
  const schedule = {
    "3-4 years": [
      [ "Early Drop Off<br>(full-time only)", 90 ],
      [ "Drop Off", 30 ],
      [ "Circle Time", 30 ],
      [ "Work", 150 ],
      [ "Lunch", 30 ],
      [ "Nap Time", 120 ],
      [ "Dismissal", 30 ],
      [ "After hours<br>(full-time only)", 180 ],
    ],
    "5-6 years": [
      [ "Early Drop Off<br>(full-time only)", 90 ],
      [ "Drop Off", 30 ],
      [ "Circle Time", 30 ],
      [ "Work", 150 ],
      [ "Lunch", 30 ],
      [ "Nap Time", 30 ],
      [ "Work", 90 ],
      [ "Dismissal", 30 ],
      [ "After hours<br>(full-time only)", 180 ],
    ]
  }
  const startTime = 7*60;
  const endTime = 18*60;
  const timeDiff = 60;
  const timeSteps = Math.floor((endTime - startTime) / timeDiff);
  const totalMinutes = endTime - startTime;

  function getRangeText(start: number, duration: number) {
    const [ startHour, startMinute ] = splitMinutes(start);
    const [ endHour, endMinute ] = splitMinutes(start + duration);

    const startMinuteText = String(startMinute).padStart(2, '0');
    const endMinuteText = String(endMinute).padStart(2, '0');

    return `${startHour}:${startMinuteText}-${endHour}:${endMinuteText}`;
  }

  function splitMinutes(minutes: number) {
    let hour = Math.floor(minutes / 60);
    if (hour > 12) hour++;
    return [ hour % 13, minutes % 60 ]
  }
</script>

<div style="--total-minutes: {totalMinutes}">
  <div class="flex rounded-lg overflow-hidden glass">
    <div class="grid grid-template w-[20%] min-w-[100px] sm-w-[150px]">
      <div class="main-cell h-[50px]">
        <div class="font-bold text-xl">Age</div>
      </div>
      {#each {length: timeSteps} as _, i}
        <div class="main-cell" style="grid-row: auto / span {timeDiff};">
          <div class="font-bold">{getRangeText(startTime + timeDiff*i, timeDiff)}</div>
        </div>
      {/each}
    </div>
    {#each Object.entries(schedule) as [ title, row ]}
      <div class="grid grid-template w-[40%] sm-w-[200px]">
        <div class="main-cell h-[50px]">
          <div class="font-bold text-xl">{title}</div>
        </div>
        {#each row as [ desc, minutes ]}
          <div class="main-cell inner-cell cell-glass rounded-md" style="grid-row: auto / span {minutes};">
            <div>{@html desc}</div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .grid .inner-cell {
    margin-top: 10px;
    margin-left: 10px;
  }
  .grid {
    margin-top: 10px;
    margin-bottom: 25px;
  }
  .grid:last-child {
    margin-right: 25px;
  }
    
  .main-cell {
    @apply flex items-center justify-center px-2 py-1 text-center text-xs text-neutral-800;
  }

  .grid-template {
    grid-template-rows: 50px repeat(var(--total-minutes), 1fr);
  }

  .glass {
		backdrop-filter: blur(50px);
		background-color: hsla(0, 0%, 100%, 0.2);
	}

  .cell-glass {
    backdrop-filter: blur(50px);
		background-color: hsla(0, 0%, 100%, 0.5);
  }
</style>