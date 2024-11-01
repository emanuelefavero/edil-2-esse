interface Props {
  className?: string
}

export default function Component({ className }: Props) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 250 250'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`fill-yellow-600 dark:fill-yellow-600 ${className}`}
    >
      <path
        d='M78.125 195.313C78.1228 199.609 76.9396 203.822 74.7049 207.491C72.4701 211.161 69.2698 214.145 65.4536 216.119C61.6373 218.092 57.3521 218.979 53.066 218.682C48.78 218.384 44.6581 216.915 41.1508 214.433C37.6436 211.952 34.8858 208.554 33.179 204.611C31.4721 200.669 30.8819 196.333 31.4727 192.077C32.0635 187.822 33.8126 183.81 36.529 180.482C39.2454 177.153 42.8244 174.635 46.875 173.203V39.0625C46.875 36.9905 47.6981 35.0034 49.1632 33.5382C50.6284 32.0731 52.6155 31.25 54.6875 31.25C56.7595 31.25 58.7466 32.0731 60.2118 33.5382C61.6769 35.0034 62.5 36.9905 62.5 39.0625V173.203C67.0715 174.819 71.0292 177.814 73.8277 181.774C76.6261 185.733 78.1275 190.464 78.125 195.313Z'
        // fill='#CA8A04'
      />
      <path
        d='M15.625 39.0625C15.625 28.7025 19.7405 18.7668 27.0662 11.4411C34.3918 4.1155 44.3275 0 54.6875 0C65.0475 0 74.9833 4.1155 82.3089 11.4411C89.6345 18.7668 93.75 28.7025 93.75 39.0625V157.031C101.287 164.723 106.384 174.469 108.404 185.046C110.424 195.624 109.276 206.562 105.105 216.49C100.933 226.418 93.9232 234.893 84.9542 240.853C75.9851 246.813 65.4562 249.992 54.6875 249.992C43.9189 249.992 33.3899 246.813 24.4209 240.853C15.4519 234.893 8.442 226.418 4.27031 216.49C0.098615 206.562 -1.04921 195.624 0.970747 185.046C2.99071 174.469 8.08855 164.723 15.625 157.031V39.0625ZM54.6875 15.625C48.4715 15.625 42.5101 18.0943 38.1147 22.4897C33.7193 26.8851 31.25 32.8465 31.25 39.0625V163.859L28.6407 166.203C22.7433 171.477 18.5864 178.417 16.7199 186.105C14.8534 193.793 15.3653 201.867 18.188 209.258C21.0106 216.648 26.0109 223.008 32.5271 227.495C39.0433 231.981 46.7683 234.383 54.6797 234.383C62.5912 234.383 70.3161 231.981 76.8323 227.495C83.3485 223.008 88.3488 216.648 91.1715 209.258C93.9941 201.867 94.506 193.793 92.6395 186.105C90.7731 178.417 86.6161 171.477 80.7188 166.203L78.125 163.844V39.0625C78.125 32.8465 75.6557 26.8851 71.2604 22.4897C66.865 18.0943 60.9035 15.625 54.6875 15.625ZM132.813 31.25C134.885 31.25 136.872 32.0731 138.337 33.5382C139.802 35.0034 140.625 36.9905 140.625 39.0625V54.6875C140.625 56.7595 139.802 58.7466 138.337 60.2118C136.872 61.6769 134.885 62.5 132.813 62.5C130.741 62.5 128.753 61.6769 127.288 60.2118C125.823 58.7466 125 56.7595 125 54.6875V39.0625C125 36.9905 125.823 35.0034 127.288 33.5382C128.753 32.0731 130.741 31.25 132.813 31.25ZM199.109 58.7031C200.574 60.1682 201.397 62.155 201.397 64.2266C201.397 66.2982 200.574 68.2849 199.109 69.75L188.063 80.8125C186.596 82.2795 184.606 83.1036 182.531 83.1036C180.457 83.1036 178.467 82.2795 177 80.8125C175.533 79.3455 174.709 77.3559 174.709 75.2813C174.709 73.2066 175.533 71.217 177 69.75L188.063 58.7031C189.528 57.2385 191.514 56.4157 193.586 56.4157C195.658 56.4157 197.644 57.2385 199.109 58.7031ZM125 85.9375C125 83.8655 125.823 81.8784 127.288 80.4132C128.753 78.9481 130.741 78.125 132.813 78.125C145.245 78.125 157.167 83.0636 165.958 91.8544C174.749 100.645 179.688 112.568 179.688 125C179.688 137.432 174.749 149.355 165.958 158.146C157.167 166.936 145.245 171.875 132.813 171.875C130.741 171.875 128.753 171.052 127.288 169.587C125.823 168.122 125 166.135 125 164.063C125 161.991 125.823 160.003 127.288 158.538C128.753 157.073 130.741 156.25 132.813 156.25C141.101 156.25 149.049 152.958 154.91 147.097C160.77 141.237 164.063 133.288 164.063 125C164.063 116.712 160.77 108.763 154.91 102.903C149.049 97.0424 141.101 93.75 132.813 93.75C130.741 93.75 128.753 92.9269 127.288 91.4618C125.823 89.9966 125 88.0095 125 85.9375ZM195.313 125C195.313 122.928 196.136 120.941 197.601 119.476C199.066 118.011 201.053 117.188 203.125 117.188H218.75C220.822 117.188 222.809 118.011 224.274 119.476C225.739 120.941 226.563 122.928 226.563 125C226.563 127.072 225.739 129.059 224.274 130.524C222.809 131.989 220.822 132.813 218.75 132.813H203.125C201.053 132.813 199.066 131.989 197.601 130.524C196.136 129.059 195.313 127.072 195.313 125ZM177 169.188C177.726 168.46 178.588 167.883 179.537 167.489C180.486 167.095 181.504 166.892 182.531 166.892C183.559 166.892 184.576 167.095 185.526 167.489C186.475 167.883 187.337 168.46 188.063 169.188L199.109 180.25C200.533 181.723 201.32 183.697 201.302 185.745C201.284 187.794 200.463 189.753 199.014 191.202C197.566 192.65 195.606 193.472 193.558 193.49C191.509 193.507 189.536 192.72 188.063 191.297L177 180.25C176.272 179.524 175.695 178.662 175.301 177.713C174.908 176.764 174.705 175.746 174.705 174.719C174.705 173.691 174.908 172.674 175.301 171.724C175.695 170.775 176.272 169.913 177 169.188ZM132.813 187.5C134.885 187.5 136.872 188.323 138.337 189.788C139.802 191.253 140.625 193.241 140.625 195.313V210.938C140.625 213.01 139.802 214.997 138.337 216.462C136.872 217.927 134.885 218.75 132.813 218.75C130.741 218.75 128.753 217.927 127.288 216.462C125.823 214.997 125 213.01 125 210.938V195.313C125 193.241 125.823 191.253 127.288 189.788C128.753 188.323 130.741 187.5 132.813 187.5Z'
        // fill='#CA8A04'
      />
    </svg>
  )
}
