import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button';
import { toast } from 'sonner';
import emailjs from 'emailjs-com';
import { FaSpinner } from "react-icons/fa";



const   Contactpage = ({darkmode}) => {
  const [loading,setLoading]=useState(false);
  const [formData ,setFormData]=useState({
    name:"",
    email:"",
    number:"",
    method:"",
    message:"",
  });
  const sendHandler=async()=>{ 
    try {
      if ( formData.name == "" || formData.email == "" || formData.message == ""){
        toast.warning("Please Fill all the Valid Data");
      }else{
if(formData.number.length == 10 || formData.number.length == 0){
  setLoading(true);
  const serviceID = 'service_mdarc0h';
  const templateID = 'template_qoio6by';
  const userID = 'j-97jybwg4OtZzWPT';
  const result = await emailjs.send(serviceID, templateID, formData, userID);
  const templateID2 = 'template_ldjbl5p';
  const result2 = await emailjs.send(serviceID, templateID2, formData, userID);
  console.log('Email sent successfully: user ', result2.text);      
  console.log('Email sent successfully: to you ', result.text);
  setLoading(false);
  toast.success("Message sent successfully!");
  setFormData({
    name: "",
    email: "",
    number: "",
    method: "",
    message: "",
  });
}else{
  toast.warning("Enter a valid Number");
}
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    console.log("Form data updated:", formData);
    // You can also add any other logic here that you want to trigger when formData changes
  }, [formData]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      method: value,  // Update method value when selected
    });
  };
  return (
   <>
   <div id='contact' className={` ${darkmode ? "bg-gray-950 text-gray-50 " : ""} pt-20 sm:mt-0 sm:h-[90vh] pl-0 pr-4 sm:pl-20 sm:pr-20`}>
    
   <div className='flex flex-col items-center gap-2'>
          <h2 id='animation' className={`${darkmode ? "text-white " : ""} text-1/2xl text-gray-500`}>Get in Touch</h2>
          <h2 id='animation' className='text-4xl font-semibold'>Contact Me</h2>
        </div>

<div className='flex flex-col-reverse sm:flex-row '>
  <div className=' hidden sm:flex w-2/5 items-center justify-center gap-10 mt-24 flex-col'>
  <h2 id='animation' className={`${darkmode ? " text-white" : ""} text-3xl font-semibold text-gray-500  `}><span className={`text-gray-500 `}>📞</span> Get in Touch</h2>
  <div id='animation' className='flex items-center border border-gray-500 rounded-xl  hover:scale-105 transition-all w-1/2 p-2 mt-5 gap-2 '>
    <img src="./email.png" alt="" className={`${darkmode ? "text-white" : " "} w-[50px] `}/>
    <span className='hover:underline hover:underline-offset-8 cursor-pointer hover:text-gray-500  '>sameetpisal@gmail.com</span>
  </div>
  <div id='animation' className='flex gap-2'>
    <h2 className='text-xl font-bold'>Address :-</h2>
    <span className={` ${darkmode ? "text-white" : ""} text-xl font-semibold text-gray-600`}>Pune, Maharashtra, India</span>
  </div>
  <div id='animation' className='flex gap-12  mt-10  items-center'>
             <a href="https://github.com/Sameet728?tab=repositories" target='_blank'> <FaGithub className= 'hover:text-teal-400 text-3xl cursor-pointer hover:scale-125 transition-all' /></a> 
             <a href="https://www.linkedin.com/in/sameet-pisal-2a597b217/" target='_blank'> <FaLinkedin className='hover:text-teal-400  text-3xl cursor-pointer hover:scale-125 transition-all' /></a> 
             <a href="mailto:sameetpisal@gmail.com" target='_blank'> <IoMdMail className= 'hover:text-teal-400 text-3xl cursor-pointer hover:scale-125 transition-all' /></a> 
            </div>
  
  </div>
  
  <div className='sm:w-3/5 mt-12 pt-4 pb-5 flex flex-col items-center justify-center'>
  <h2 id='animation' className={`${darkmode ? "text-white" : ""} font-semibold text-gray-600 text-2xl sm:pl-10 sm:text-3xl`}>Love to hear from you 👋</h2>
  
  <div className='mt-10'>
    <div className='flex flex-col sm:flex-row  gap-8 '>
    <div id='animation'>
      <label htmlFor="name" className={`${darkmode ? "text-white" :""}  font-semibold text-gray-900`}>Your Name</label>
     <Input required onChange={handleInputChange} value={formData.name} name="name" className={` w-[105%]  sm:w-[440px] text-1/2xl font-bold mt-1 text-black `} placeholder="Your full name, please" type="text"/>
    </div>
    <div id='animation'>
    <label htmlFor="email" className={`${darkmode ? "text-white " :""}  font-semibold text-gray-900`}>Email</label>
     <Input onChange={handleInputChange}  value={formData.email} name="email" className='w-[105%]  sm:w-[440px] text-1/2xl font-bold mt-1 text-black bg-gray-50' placeholder="Drop your email address"  type="email"/>
    </div>
    </div>
    <div  className='flex flex-col sm:flex-row    gap-8 mt-8'>
    <div id='animation'>
      <label htmlFor="name" className={`${darkmode ? "text-white " :""}  font-semibold text-gray-900`}>Phone Number (optional)</label>
     <Input onChange={handleInputChange}  value={formData.number} name="number" className='w-[105%]  sm:w-[440px] text-1/2xl font-bold text-black mt-1 bg-gray-50' placeholder="Leave your number, if you'd like" type="number"/>
    </div>
    <div id='animation'> 
    <label htmlFor="name" className={`${darkmode ? "text-white " :""}  font-semibold text-gray-900`}>Select your preferred contact method  </label>
    <Select onValueChange={handleSelectChange}>
  <SelectTrigger className={`${darkmode ? "text-black" : ""} w-[105%] text-black sm:w-[440px] text-1/2xl font-semibold  mt-1 bg-gray-50 `}>
    <SelectValue  placeholder="Email or phone?"  className='text-black' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="email" className={`${darkmode ? "text-black " :""}  font-semibold text-gray-900`}>Email</SelectItem>
    {!formData.number == "" ?    <SelectItem value="phone" className={`${darkmode ? "text-black " :""}  font-semibold text-gray-900`}>Phone</SelectItem>: ""}
 
   
  </SelectContent>
</Select>
    </div>
    </div>
    <div id='animation' className='mt-8 '>
    <label htmlFor="message" className={`${darkmode ? "text-white" : ""} w-[105%]  sm:w-[440px] text-1/2xl font-semibold  mt-1  `}
    >Message</label>
    <Textarea onChange={handleInputChange}  value={formData.message} name="message" className=' text-1/2xl font-bold mt-1 bg-gray-50 w-[105%]  sm:w-[920px] text-black' placeholder="Feel free to share the details here"></Textarea>
     
    </div>

  </div>
  <div id='animation' className='flex justify-center sm:justify-end items-center sm:pr-36 pt-10'><Button className={`${darkmode ? "bg-teal-400 hover:bg-teal-600 hover:scale-110 transition-all" :""}`} onClick={sendHandler}>{loading ? <><FaSpinner  className={` animate-spin mr-2 text-white`} />
    Please Wait</>  : "Just Send 🡵"}</Button></div>
  </div>

</div>




   </div>
   </>
  )
}

export default Contactpage