// import { useState } from 'react';
// import { Switch } from 'lucide-react';

// interface Props {
// }

// const ToggleButton: React.FC<Props> = () => {
//   const [isToggled, setIsToggled] = useState(false);

//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <button 
//       className="bg-gray-200 hover:bg-gray-300 rounded-lg p-2 border border-gray-400 flex items-center"
//       onClick={handleToggle}
//     >
//       <span className="mr-2">Toggle</span>
//       <span className="mr-2">{isToggled ? 'ON' : 'OFF'}</span>
//       <Switch className={`text-lg ${isToggled ? 'text-green-500' : 'text-gray-500'}`} />
//     </button>
//   );
// };

// export default ToggleButton;