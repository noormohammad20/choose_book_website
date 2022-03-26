import React from 'react'
import './Answer.css'
const Answer = () => {
    return (
        <div className='answer'>
            <h1>রিয়েক্ট কিভাবে কাজ করে ?</h1>
            <h3>ব্রাউজারের ডমটা অনেক এক্সপেন্সিভ হয়,ইউ আই তে কোনো পরিবর্তন হলে বারবার ডম এর ভিতরে খুঁজে চেঞ্জ করতে হয়। এতে বারবার সাইট রিলোড হয়। এইজন্য রিয়েক্ট অরিজিনাল  ডমের একটা সফট কপি তার মেমোরিতে রেখে দেয় এটাকে ভার্চুয়াল  ডম বলে। এই ভার্চুয়াল ডম এর সুবিধা হল যদি ইউ আই তে কোন চেঞ্জ করতে চাই তাহলে রিয়েক্ট  খুব দ্রুত যেটা চেঞ্জ করতে চাই,সেটা আগের ভার্চুয়াল ডম এর সাথে কম্পেয়ার করে চেক করে ফেলে এরপর অরিজিনাল ডম এর মধ্যে খুব সহজে সেই জায়গাগুলোতে চেন্জ করে ফেলতে পারে ।এই জন্য বারবার অরিজিনাল ডমের ভিতরে খুঁজা লাগে না। </h3>

            <h1>state এবং props এর মাঝে পার্থক্য কি ?</h1>
            <h3>
                props হলো read only  ।

                আর state read এবং রাইট দুইটাই করা যায়।

                state asynchronous হয়ে থাকে।

                props পরিবর্তন করা যায় না।

                আর state পরিবর্তন করা যায় this.setState ইউজ করে ।

            </h3>
        </div>
    )
}

export default Answer