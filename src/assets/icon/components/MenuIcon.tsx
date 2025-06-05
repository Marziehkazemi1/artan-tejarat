export function MenuIcon(props: { class?: string }) {
    return (
      <svg
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        fill="none"
        className={props.class}
        xmlns="http://www.w3.org/2000/svg"
      >
       <path 
         d="M4 6H20M4 12H20M4 18H20" 
         stroke="currentColor" 
         strokeWidth="2"
         strokeLinecap="round" 
         strokeLinejoin="round"/>
      </svg>
    );
  }
  