import React from 'react'
import "../styles/style.css"
import logo from "../Images/galleria..png"
import {Link,useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
const Header = (props) => {
  const[isOpen , setOpen] = useState(false)
  const location = useLocation()
  
  useEffect(()=>{
    // console.log(location.pathname)
    if(location.pathname === "/"){
       setOpen(false)
    }else{
      setOpen(true)
    }
  },[location])
  
 

  function handleClick(){
    setOpen(value=>!value)
    
  }

  return (
      <header>
          <nav>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="114" height="32" viewBox="0 0 114 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.456 24.16C41.5093 24.16 41.5493 24.1493 41.576 24.128C41.6027 24.1067 41.616 24.0747 41.616 24.032C41.616 24 41.6027 23.9707 41.576 23.944C41.5493 23.9173 41.4987 23.8987 41.424 23.888L40.816 23.744C40.6773 23.712 40.5787 23.6453 40.52 23.544C40.4613 23.4427 40.432 23.3067 40.432 23.136V0.224C40.432 0.16 40.4133 0.106667 40.376 0.064C40.3387 0.0213333 40.2827 0 40.208 0C40.144 0 40.088 0.00533333 40.04 0.016C39.992 0.0266667 39.904 0.048 39.776 0.08L33.712 1.76C33.6693 1.77067 33.632 1.78667 33.6 1.808C33.568 1.82933 33.552 1.86133 33.552 1.904C33.552 1.94667 33.5653 1.98133 33.592 2.008C33.6187 2.03467 33.6693 2.048 33.744 2.048H34.368C34.464 2.048 34.5333 2.06933 34.576 2.112C34.6187 2.15467 34.64 2.21867 34.64 2.304V23.136C34.64 23.3067 34.6133 23.4427 34.56 23.544C34.5067 23.6453 34.4053 23.712 34.256 23.744L33.648 23.888C33.5733 23.8987 33.5227 23.9173 33.496 23.944C33.4693 23.9707 33.456 24 33.456 24.032C33.456 24.0747 33.472 24.1067 33.504 24.128C33.536 24.1493 33.5733 24.16 33.616 24.16H41.456ZM8.224 32C10.848 32 12.8693 31.52 14.288 30.56C15.7067 29.6 16.416 28.352 16.416 26.816C16.416 25.9733 16.2267 25.2747 15.848 24.72C15.4693 24.1653 14.808 23.72 13.864 23.384C12.92 23.048 11.6053 22.784 9.92 22.592C8.91733 22.4747 8.15467 22.3547 7.632 22.232C7.10933 22.1093 6.752 21.9733 6.56 21.824C6.368 21.6747 6.272 21.4933 6.272 21.28C6.272 21.0667 6.33067 20.896 6.448 20.768C6.48711 20.7253 6.52563 20.6898 6.56356 20.6613L6.58333 20.6487L6.63378 20.6542C7.11793 20.7087 7.62667 20.736 8.16 20.736C9.568 20.736 10.8267 20.48 11.936 19.968C13.0453 19.456 13.92 18.7653 14.56 17.896C15.2 17.0267 15.52 16.0533 15.52 14.976C15.52 14.0373 15.24 13.152 14.68 12.32C14.12 11.488 13.2987 10.8107 12.216 10.288C11.7829 10.0789 11.3119 9.91168 10.8029 9.78624L10.708 9.76467C10.8333 9.43222 10.976 9.172 11.136 8.984C11.3493 8.73333 11.6213 8.608 11.952 8.608C12.2507 8.608 12.5093 8.71733 12.728 8.936C12.9467 9.15467 13.1627 9.408 13.376 9.696C13.5893 9.984 13.8293 10.2373 14.096 10.456C14.3627 10.6747 14.6933 10.784 15.088 10.784C15.7493 10.784 16.2587 10.5893 16.616 10.2C16.9733 9.81067 17.152 9.26933 17.152 8.576C17.152 7.78667 16.9333 7.14667 16.496 6.656C16.0587 6.16533 15.3973 5.92 14.512 5.92C13.4773 5.92 12.632 6.28267 11.976 7.008C11.3705 7.67754 10.8763 8.53794 10.4934 9.58921L10.4513 9.70867L10.2812 9.67474C9.65783 9.56091 8.98275 9.504 8.256 9.504C6.64533 9.504 5.25333 9.76533 4.08 10.288C2.90667 10.8107 2.00267 11.5173 1.368 12.408C0.733333 13.2987 0.416 14.304 0.416 15.424C0.416 16.3733 0.728 17.2507 1.352 18.056C1.976 18.8613 2.86667 19.5093 4.024 20C4.56409 20.229 5.15238 20.4045 5.78887 20.5266L5.95133 20.556C5.10173 20.6584 4.39795 20.8224 3.84 21.048C3.11467 21.3413 2.592 21.7173 2.272 22.176C1.952 22.6347 1.792 23.1573 1.792 23.744C1.792 24.384 1.968 24.8933 2.32 25.272C2.584 25.556 2.968 25.7965 3.472 25.9935L3.482 25.998L3.41417 26.0066C2.31484 26.1619 1.49945 26.413 0.968 26.76C0.322667 27.1813 0 27.84 0 28.736C0 29.3867 0.269333 29.9573 0.808 30.448C1.34667 30.9387 2.21867 31.32 3.424 31.592C4.62933 31.864 6.22933 32 8.224 32ZM7.696 19.768C7.38667 19.4 7.10667 18.84 6.856 18.088C6.60533 17.336 6.4 16.4053 6.24 15.296C6.09067 14.1973 6.03467 13.2533 6.072 12.464C6.10933 11.6747 6.224 11.064 6.416 10.632C6.608 10.2 6.85867 9.96267 7.168 9.92C7.60533 9.856 8.048 10.248 8.496 11.096C8.944 11.944 9.28533 13.1947 9.52 14.848C9.75467 16.5227 9.77333 17.8267 9.576 18.76C9.37867 19.6933 9.056 20.192 8.608 20.256C8.30933 20.2987 8.00533 20.136 7.696 19.768ZM5.112 30.336C5.87467 31.168 6.96533 31.584 8.384 31.584C9.152 31.584 9.78933 31.512 10.296 31.368C10.8027 31.224 11.1813 30.992 11.432 30.672C11.6827 30.352 11.808 29.9307 11.808 29.408C11.808 28.9493 11.6747 28.5547 11.408 28.224C11.1413 27.8933 10.6667 27.6133 9.984 27.384C9.30133 27.1547 8.34133 26.9547 7.104 26.784C5.92246 26.6166 4.95451 26.4311 4.20014 26.2273L4.102 26.2L4.0832 26.2528C4.06613 26.304 4.04907 26.3637 4.032 26.432C3.98933 26.6027 3.968 26.7947 3.968 27.008C3.968 28.3947 4.34933 29.504 5.112 30.336ZM28.656 24.48C29.6587 24.48 30.4507 24.3173 31.032 23.992C31.6133 23.6667 32.0293 23.3013 32.28 22.896C32.5307 22.4907 32.656 22.1653 32.656 21.92C32.656 21.8667 32.648 21.832 32.632 21.816C32.616 21.8 32.592 21.792 32.56 21.792C32.5387 21.792 32.52 21.8 32.504 21.816C32.488 21.832 32.4747 21.8667 32.464 21.92C32.4213 22.2507 32.3227 22.4773 32.168 22.6C32.0133 22.7227 31.856 22.784 31.696 22.784C31.536 22.784 31.4 22.72 31.288 22.592C31.176 22.464 31.12 22.272 31.12 22.016V14.112C31.12 12.6187 30.6107 11.4773 29.592 10.688C28.5733 9.89867 27.04 9.504 24.992 9.504C23.4773 9.504 22.2107 9.70667 21.192 10.112C20.1733 10.5173 19.408 11.0213 18.896 11.624C18.384 12.2267 18.128 12.8213 18.128 13.408C18.128 14.0907 18.3173 14.5973 18.696 14.928C19.0747 15.2587 19.5573 15.424 20.144 15.424C21.0187 15.424 21.728 15.1547 22.272 14.616C22.816 14.0773 23.088 13.4507 23.088 12.736V11.04C23.088 10.656 23.1947 10.352 23.408 10.128C23.6213 9.904 23.9093 9.792 24.272 9.792C24.56 9.792 24.8027 9.904 25 10.128C25.1973 10.352 25.296 10.656 25.296 11.04V16.96L25.2611 16.9484C25.0376 16.8819 24.7556 16.8439 24.4151 16.8344L24.24 16.832C21.712 16.832 19.912 17.1973 18.84 17.928C17.768 18.6587 17.232 19.6693 17.232 20.96C17.232 21.984 17.6347 22.8267 18.44 23.488C19.2453 24.1493 20.2613 24.48 21.488 24.48C22.448 24.48 23.3413 24.2747 24.168 23.864C24.6767 23.6113 25.1097 23.2889 25.4669 22.8968L25.5873 22.758L25.5889 22.7933C25.6215 23.1929 25.817 23.5462 26.1756 23.8533L26.288 23.944C26.7573 24.3013 27.5467 24.48 28.656 24.48ZM23.36 22.24C23.648 22.6667 24.016 22.88 24.464 22.88L24.5695 22.8746C24.7811 22.8531 24.9966 22.7669 25.216 22.616L25.296 22.5567V17.2453L25.248 17.232C25.024 17.1787 24.7627 17.152 24.464 17.152C23.9947 17.152 23.6213 17.3973 23.344 17.888C23.0667 18.3787 22.928 19.136 22.928 20.16C22.928 21.12 23.072 21.8133 23.36 22.24ZM50.728 24.128C50.7013 24.1493 50.6613 24.16 50.608 24.16H42.768C42.7253 24.16 42.688 24.1493 42.656 24.128C42.624 24.1067 42.608 24.0747 42.608 24.032C42.608 24 42.6213 23.9707 42.648 23.944C42.6747 23.9173 42.7253 23.8987 42.8 23.888L43.408 23.744C43.5573 23.712 43.6587 23.6453 43.712 23.544C43.7653 23.4427 43.792 23.3067 43.792 23.136V2.304C43.792 2.21867 43.7707 2.15467 43.728 2.112C43.6853 2.06933 43.616 2.048 43.52 2.048H42.896C42.8213 2.048 42.7707 2.03467 42.744 2.008C42.7173 1.98133 42.704 1.94667 42.704 1.904C42.704 1.86133 42.72 1.82933 42.752 1.808C42.784 1.78667 42.8213 1.77067 42.864 1.76L48.928 0.08C49.056 0.048 49.144 0.0266667 49.192 0.016C49.24 0.00533333 49.296 0 49.36 0C49.4347 0 49.4907 0.0213333 49.528 0.064C49.5653 0.106667 49.584 0.16 49.584 0.224V23.136C49.584 23.3067 49.6133 23.4427 49.672 23.544C49.7307 23.6453 49.8293 23.712 49.968 23.744L50.576 23.888C50.6507 23.8987 50.7013 23.9173 50.728 23.944C50.7547 23.9707 50.768 24 50.768 24.032C50.768 24.0747 50.7547 24.1067 50.728 24.128ZM58.96 24.48C60.2933 24.48 61.488 24.2 62.544 23.64C63.6 23.08 64.4347 22.3173 65.048 21.352C65.6613 20.3867 65.968 19.296 65.968 18.08C65.968 18.016 65.9547 17.9733 65.928 17.952C65.9013 17.9307 65.872 17.92 65.84 17.92C65.8293 17.92 65.8107 17.928 65.784 17.944C65.7573 17.96 65.744 17.9947 65.744 18.048C65.744 19.04 65.3733 19.832 64.632 20.424C63.8907 21.016 62.928 21.312 61.744 21.312C60.272 21.312 59.0933 20.808 58.208 19.8C57.5809 19.086 57.1759 18.071 56.993 16.7549L56.974 16.608H65.584C65.712 16.608 65.811 16.5841 65.881 16.5363L65.928 16.496C65.9973 16.4213 66.032 16.3307 66.032 16.224C66.032 14.944 65.7547 13.7973 65.2 12.784C64.6453 11.7707 63.8587 10.9707 62.84 10.384C61.8213 9.79733 60.6133 9.504 59.216 9.504C57.648 9.504 56.2853 9.81067 55.128 10.424C53.9707 11.0373 53.0773 11.9173 52.448 13.064C51.8187 14.2107 51.504 15.584 51.504 17.184C51.504 18.6133 51.824 19.8773 52.464 20.976C53.104 22.0747 53.984 22.9333 55.104 23.552C56.224 24.1707 57.5093 24.48 58.96 24.48ZM56.88 14.976C56.88 15.344 56.8923 15.6953 56.9169 16.03L56.9327 16.224H60.016C60.208 16.224 60.304 16.1067 60.304 15.872C60.304 13.728 60.1093 12.1893 59.72 11.256C59.3307 10.3227 58.928 9.856 58.512 9.856C58.224 9.856 57.9573 10.008 57.712 10.312C57.4667 10.616 57.2667 11.1413 57.112 11.888C56.9573 12.6347 56.88 13.664 56.88 14.976ZM75.856 24.16C75.92 24.16 75.968 24.1493 76 24.128C76.032 24.1067 76.048 24.0747 76.048 24.032C76.048 24 76.0373 23.9733 76.016 23.952C75.9947 23.9307 75.952 23.9147 75.888 23.904L74.32 23.584C74.192 23.552 74.0907 23.4773 74.016 23.36C73.9413 23.2427 73.904 23.1147 73.904 22.976V15.68C73.904 14.9547 73.9467 14.3627 74.032 13.904C74.1173 13.4453 74.2373 13.1093 74.392 12.896C74.5467 12.6827 74.7253 12.576 74.928 12.576C75.152 12.576 75.3067 12.6507 75.392 12.8C75.4773 12.9493 75.5253 13.1413 75.536 13.376L75.568 13.984C75.6107 14.7627 75.8027 15.3573 76.144 15.768C76.4853 16.1787 77.0347 16.384 77.792 16.384C78.6133 16.384 79.296 16.1067 79.84 15.552C80.384 14.9973 80.656 14.144 80.656 12.992C80.656 11.8187 80.4267 10.944 79.968 10.368C79.5093 9.792 78.8427 9.504 77.968 9.504C77.2533 9.504 76.5653 9.73067 75.904 10.184C75.2427 10.6373 74.7013 11.3093 74.28 12.2C74.1295 12.5181 74.0059 12.8637 73.9092 13.2369L73.904 13.2567V9.856C73.904 9.81333 73.8969 9.77304 73.8827 9.73511L73.856 9.68C73.824 9.62667 73.7653 9.6 73.68 9.6C73.616 9.6 73.5547 9.60533 73.496 9.616C73.4373 9.62667 73.36 9.64267 73.264 9.664L67.184 11.04C67.12 11.0507 67.072 11.072 67.04 11.104C67.008 11.136 66.992 11.168 66.992 11.2C66.992 11.232 67.008 11.2613 67.04 11.288C67.072 11.3147 67.1093 11.328 67.152 11.328H67.856C67.952 11.328 68.0187 11.3573 68.056 11.416C68.0933 11.4747 68.112 11.552 68.112 11.648V23.232C68.112 23.36 68.0853 23.4693 68.032 23.56C67.9787 23.6507 67.8773 23.712 67.728 23.744L67.152 23.872C67.088 23.8827 67.0347 23.904 66.992 23.936C66.9493 23.968 66.928 24 66.928 24.032C66.928 24.064 66.944 24.0933 66.976 24.12C67.008 24.1467 67.056 24.16 67.12 24.16H75.856ZM87.656 7.6C87.032 8.21867 86.2293 8.528 85.248 8.528C84.2773 8.528 83.488 8.21867 82.88 7.6C82.272 6.98133 81.968 6.224 81.968 5.328C81.968 4.432 82.272 3.67467 82.88 3.056C83.488 2.43733 84.2773 2.128 85.248 2.128C86.2293 2.128 87.032 2.43733 87.656 3.056C88.28 3.67467 88.592 4.432 88.592 5.328C88.592 6.224 88.28 6.98133 87.656 7.6ZM89.232 24.16C89.2853 24.16 89.3253 24.1493 89.352 24.128C89.3787 24.1067 89.392 24.0747 89.392 24.032C89.392 24 89.3787 23.9707 89.352 23.944C89.3253 23.9173 89.2747 23.8987 89.2 23.888L88.592 23.744C88.4533 23.712 88.3547 23.6453 88.296 23.544C88.2373 23.4427 88.208 23.3067 88.208 23.136V9.664C88.208 9.6 88.1893 9.54667 88.152 9.504C88.1147 9.46133 88.0587 9.44 87.984 9.44C87.92 9.44 87.864 9.44533 87.816 9.456C87.768 9.46667 87.68 9.488 87.552 9.52L81.488 11.2C81.4453 11.2107 81.408 11.2267 81.376 11.248C81.344 11.2693 81.328 11.3013 81.328 11.344C81.328 11.3867 81.3413 11.4213 81.368 11.448C81.3947 11.4747 81.4453 11.488 81.52 11.488H82.144C82.24 11.488 82.3093 11.5093 82.352 11.552C82.3947 11.5947 82.416 11.6587 82.416 11.744V23.136C82.416 23.3067 82.3893 23.4427 82.336 23.544C82.2827 23.6453 82.1813 23.712 82.032 23.744L81.424 23.888C81.3493 23.8987 81.2987 23.9173 81.272 23.944C81.2453 23.9707 81.232 24 81.232 24.032C81.232 24.0747 81.248 24.1067 81.28 24.128C81.312 24.1493 81.3493 24.16 81.392 24.16H89.232ZM103.8 23.992C103.219 24.3173 102.427 24.48 101.424 24.48C100.315 24.48 99.5253 24.3013 99.056 23.944L98.9436 23.8533C98.585 23.5462 98.3895 23.1929 98.3569 22.7933L98.3553 22.758L98.2349 22.8968C97.8777 23.2889 97.4447 23.6113 96.936 23.864C96.1093 24.2747 95.216 24.48 94.256 24.48C93.0293 24.48 92.0133 24.1493 91.208 23.488C90.4027 22.8267 90 21.984 90 20.96C90 19.6693 90.536 18.6587 91.608 17.928C92.68 17.1973 94.48 16.832 97.008 16.832L97.1831 16.8344C97.5236 16.8439 97.8056 16.8819 98.0291 16.9484L98.064 16.96V11.04C98.064 10.656 97.9653 10.352 97.768 10.128C97.5707 9.904 97.328 9.792 97.04 9.792C96.6773 9.792 96.3893 9.904 96.176 10.128C95.9627 10.352 95.856 10.656 95.856 11.04V12.736C95.856 13.4507 95.584 14.0773 95.04 14.616C94.496 15.1547 93.7867 15.424 92.912 15.424C92.3253 15.424 91.8427 15.2587 91.464 14.928C91.0853 14.5973 90.896 14.0907 90.896 13.408C90.896 12.8213 91.152 12.2267 91.664 11.624C92.176 11.0213 92.9413 10.5173 93.96 10.112C94.9787 9.70667 96.2453 9.504 97.76 9.504C99.808 9.504 101.341 9.89867 102.36 10.688C103.379 11.4773 103.888 12.6187 103.888 14.112V22.016C103.888 22.272 103.944 22.464 104.056 22.592C104.168 22.72 104.304 22.784 104.464 22.784C104.624 22.784 104.781 22.7227 104.936 22.6C105.091 22.4773 105.189 22.2507 105.232 21.92C105.243 21.8667 105.256 21.832 105.272 21.816C105.288 21.8 105.307 21.792 105.328 21.792C105.36 21.792 105.384 21.8 105.4 21.816C105.416 21.832 105.424 21.8667 105.424 21.92C105.424 22.1653 105.299 22.4907 105.048 22.896C104.797 23.3013 104.381 23.6667 103.8 23.992ZM97.232 22.88C96.784 22.88 96.416 22.6667 96.128 22.24C95.84 21.8133 95.696 21.12 95.696 20.16C95.696 19.136 95.8347 18.3787 96.112 17.888C96.3893 17.3973 96.7627 17.152 97.232 17.152C97.5307 17.152 97.792 17.1787 98.016 17.232L98.064 17.2453V22.5567L97.984 22.616C97.7646 22.7669 97.5491 22.8531 97.3375 22.8746L97.232 22.88ZM111.408 24.024C110.907 24.328 110.341 24.48 109.712 24.48C109.104 24.48 108.552 24.328 108.056 24.024C107.56 23.72 107.168 23.312 106.88 22.8C106.592 22.288 106.448 21.728 106.448 21.12C106.448 20.5227 106.592 19.9733 106.88 19.472C107.168 18.9707 107.56 18.5707 108.056 18.272C108.552 17.9733 109.104 17.824 109.712 17.824C110.341 17.824 110.907 17.9733 111.408 18.272C111.909 18.5707 112.307 18.9707 112.6 19.472C112.893 19.9733 113.04 20.5227 113.04 21.12C113.04 21.728 112.893 22.288 112.6 22.8C112.307 23.312 111.909 23.72 111.408 24.024Z" fill="black"/>
                </svg>
              </div>
              {!isOpen && <div onClick={handleClick}><Link to="/slide-show">start slideshow</Link></div>}
              {isOpen && <div onClick={handleClick}><Link to="/">stop slideshow</Link></div>}
          </nav>
      </header>
  )
}

export default Header