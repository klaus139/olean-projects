import React, {useState, useEffect, useRef} from 'react';
import { submitComment } from '../services';

const CommentsForm = ({slug}:{slug:any}) => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const commentEl:any = useRef();
    const nameEl:any = useRef();
    const emailEl:any = useRef();
    const storeDataEl:any = useRef()

    useEffect(()=>{
        nameEl.current.value=window.localStorage.getItem('name')
        emailEl.current.value=window.localStorage.getItem('email')
    },[])

    const handleCommentSubmission = () => {
        setError(false);

        const { value:comment } = commentEl.current;
        const { value:name } = nameEl.current;
        const { value:email } = emailEl.current;
        const { checked:storeData } = storeDataEl.current;

       

        if(!comment || !name || !email) {
            setError(true);
            return;
        }

        const commentObj = {
            name, email, comment, slug
        }

        if(storeData){
            window.localStorage.setItem('name', name);
            window.localStorage.setItem('email', email);
        } else {
            window.localStorage.remove('name', name);
            window.localStorage.remove('email', email);
        }

        submitComment(commentObj)
        .then((res) => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 3000);
        })

    }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
    <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Leave a Reply</h3>
    <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea 
        ref={commentEl} 
        className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
        placeholder='comment'
        name='comment'
        />
    </div>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
        type='text' 
        ref={nameEl}
        className='py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
        placeholder='name'
        name='name'
        />
         <input
        type='text' 
        ref={emailEl}
        className='py-4 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-200 text-gray-700'
        placeholder='email'
        name='email'
        />
    </div>
    <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
        <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' />

            <label className='text-gray-500 cursor-pointer ml-2' htmlFor='storeData'> Save my e-mail and name for the next time i comment</label>
        </div>
    </div>
    {error && <p className='text-xs text-red-500'>All fields are required.</p>}
    <div>
    <button 
    type='button' 
    onClick={handleCommentSubmission}
    className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-3 cursor-pointer'
    >
        Post Comment

    </button>
    {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
    </div>
    </div>
    
  )
}

export default CommentsForm 