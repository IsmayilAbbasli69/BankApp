import { arrowUp } from '../assets'
import styles from '../styles'
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px]`}>
      <div className={`${styles.flexCenter} w-[100%] h-[100%] rounded-full flex-col bg-primary`}>
<div className={`${styles.flexStart} flex-row`}>
<p className='font-poppins text-[18px] leading-[23px] font-medium'>
    <span className='text-gradient'>
        Get
    </span>
    
    
</p>
<img src={arrowUp} className='w-[23px] h-[23px] object-contain'/>

</div>
<p className='font-poppins text-[18px] leading-[23px] font-medium'>
    <span className='text-gradient'>
        Started
    </span>
    
    
</p>
      </div>
    </div>
  )
}

export default GetStarted
