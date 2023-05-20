import { Inter } from 'next/font/google'
import { MdKeyboardArrowDown } from "react-icons/md"
import Link from 'next/link'
import Form from '@/components/Form'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`h-100 p-3 p-lg-0  d-flex flex-column flex-lg-row align-items-center justify-content-around ${inter.className}`}>
      <section className="text-light">
        <h1 className="display-1 fw-bold d-none d-lg-block" >
          Make money <br/> driving with bolt
        </h1>
        <h1 className="fs-1 fw-bold d-sm-block d-lg-none" >
          Make money driving with bolt
        </h1>
        <p className="my-4  fs-5">Become a bolt driver, set your schedule and earn extra money by driving</p>
        <span className="fw-bold d-block mb-4">
          LEARN MORE <MdKeyboardArrowDown size={24} className="border rounded-circle" />
        </span>
      </section>
      <section>
        <Form />
      </section>

    </div>

  )
}
