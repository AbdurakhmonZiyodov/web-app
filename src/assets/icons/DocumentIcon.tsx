import { IconProps } from "./icons.types";

function DocumentIcon(props: IconProps) {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 27 29"
      fill="none"
      {...props}
    >
      <path
        d="M18.5153 20.5966H8.55005"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.5153 14.8183H8.55005"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.3526 9.0534H8.55005"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.7808 2C18.7808 2 8.1848 2.00552 8.16824 2.00552C4.35881 2.02898 2 4.53548 2 8.35871V21.0513C2 24.8938 4.37675 27.41 8.21931 27.41C8.21931 27.41 18.8139 27.4059 18.8319 27.4059C22.6413 27.3824 25.0015 24.8745 25.0015 21.0513V8.35871C25.0015 4.51616 22.6234 2 18.7808 2Z"
        stroke={props.color}
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default DocumentIcon;
