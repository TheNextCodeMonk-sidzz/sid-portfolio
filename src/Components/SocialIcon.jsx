const SocialIcon = ({link, icon, label }) => (
   <a className="flex items-center gap-3 text-sm hover:bg-zinc-800 px-2 py-1 rounded cursor-pointer transition" 
    
    href={link}
    target="_blank"
    rel="noopener noreferrer"
     >
    <img src={icon} alt={`${label} icon`}  className="w-10 h-7 invert"/>
    <span>{label}</span>
  </a>
  
);

export default SocialIcon;