import { IconProps } from "./icons.types";

function PencilIcon(props: IconProps) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 26 29"
      fill="none"
      {...props}
    >
      <path
        d="M19.9688 10.0251C17.1281 10.972 13.3405 7.18444 14.2874 4.34375M15.4545 3.17665L9.33443 9.29669C6.6738 11.9573 4.78629 15.291 3.8737 18.9414L3.57798 20.1242C3.48584 20.4928 3.81969 20.8267 4.18826 20.7345L5.37113 20.4388C9.02148 19.5262 12.3552 17.6387 15.0158 14.9781L21.1358 8.85804C21.8892 8.10464 22.3125 7.08281 22.3125 6.01734C22.3125 3.79863 20.5139 2 18.2952 2C17.2297 2 16.2079 2.42325 15.4545 3.17665Z"
        stroke={props.color}
        stroke-width="3"
      />
      <path
        d="M23.875 27H2"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default PencilIcon;
