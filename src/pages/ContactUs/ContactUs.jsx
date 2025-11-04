import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { LucidePhoneCall } from 'lucide-react'
import { Mail } from 'lucide-react'
import { MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="contact py-28">
            <div className="container">
                <div className="flex justify-between max-lg:flex-col ">
                    <div className="contact w-1/3 text-left">
                        <h1 className='text-4xl'>Contact Us</h1>
                        <p className='my-4'>We are committed to processing the information in order to contact you and talk about your questions </p>
                        <ul>
                            <li className='flex '><LucidePhoneCall className='mr-4 text-[#145DB8]' />080 707 555-321</li>
                            <li className='flex my-7'><Mail className='mr-4 text-[#145DB8]' />demo@example.com</li>
                            <li className='flex'> <MapPin className='mr-4 text-[#145DB8]' />526 Melrose Street, Water Mill, 11976 New York</li>

                        </ul>
                    </div>
                    <div className="form max-lg:mt-4">
                        <Input placeholder="Name" />
                        <Input placeholder="Email" className="my-4" />
                        <Textarea placeholder="Message" className=" h-[195px] " rows="5" cols="50" />
                        <Button className="mt-6 w-full bg-[#145DB8]">Submit</Button>




                    </div>
                </div >
            </div >
        </div>

    )
}
