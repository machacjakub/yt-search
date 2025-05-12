enum AnnouncementType {
    initial="initial",
    incremental="incremental",
    special="special",
}

export interface IAnnouncement {
    type: AnnouncementType;
    name: string;
    content: string;
}

export const initialAnnouncement: IAnnouncement = {
        type: AnnouncementType.initial,
        name: "initial",
        content: `<div style="display: flex; flex-direction: column; gap: 16px">
  <h1>Search with purpose</h1>
  <p style="font-weight: 100" class="subtitle">Cut through the noise and get straight to what matters.</p>
  
  <div class="featurePoint">
      <h3><span class="icon">🎯</span> Precision Over Distraction</h3>
      <p>Skip YouTube's cluttered homepage and jump directly to the videos you actually need.</p>
  </div>
  
  <div class="featurePoint">
      <h3><span class="icon">🕒</span> Local Search History</h3>
      <p>Access your search history anytime - all saved locally on your device.</p>
  </div>
  
  <div class="featurePoint">
      <h3><span class="icon">⭐</span> Instant Favorites</h3>
      <p>Keep your favorite searches at your fingertips for quick access.</p>
  </div>
  
  <div class="featurePoint">
      <h3><span class="icon">🔒</span> Privacy by Design</h3>
      <p>Your searches stay private - we don't store cookies or collect any data.</p>
  </div>
  
  <div class="featurePoint">
      <h3><span class="icon">✨</span> Clean UI. Zero Clutter.</h3>
      <p>Minimalist interface, maximum flow.</p>
  </div>
</div>`
    }