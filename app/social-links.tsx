const socialProfiles = [
  { name: "GitHub", url: "https://github.com/HeersareAI", icon: "[mask-image:url('/icons/github.svg')]" },
  { name: "Facebook", url: "https://www.facebook.com/ahmed.hersare", icon: "[mask-image:url('/icons/facebook.svg')]" },
  { name: "WhatsApp", url: "https://wa.me/46790408761", icon: "[mask-image:url('/icons/whatsapp.svg')]" },
];

export function SocialLinks() {
  return <nav aria-label="Social media" className="flex shrink-0 items-center gap-1">
    {socialProfiles.map(profile => <a
      key={profile.name}
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${profile.name} (opens in a new tab)`}
      title={profile.name}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/15 text-paper/75 transition-colors hover:border-green/60 hover:bg-green/10 hover:text-green"
    >
      <span aria-hidden="true" className={`h-[18px] w-[18px] bg-current [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center] ${profile.icon}`} />
    </a>)}
  </nav>;
}
