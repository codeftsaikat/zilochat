import '@/styles/index.css';
import '@/assets/font-awesome/css/font-awesome.css';
import '@/assets/owlcarousel/css/owl.carousel.min.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from '@/router';

type Props = {}

const App = (_props: Props) => {
  return (
   <div className='main-content'>
      <RouterProvider router={router} />
   </div>
  )
}

export default App