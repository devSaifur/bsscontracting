// Import necessary images

import beforeAfter from '@images/before-after.avif'
import treeService from '@images/tree-services-1.webp'
import treeService2 from '@images/tree-services-2.webp'
import lawnCare from '@images/lawn-care-1.webp'
import lawnCare2 from '@images/lawn-care-2.webp'
import interiorDesign from '@images/interior-design.webp'
import fixSupport from '@images/fix-support-1.webp'
import fixSupport2 from '@images/fix-support-2.webp'

interface Article {
  isRightSection: boolean
  title: string
  subTitle: string
  btnExists?: boolean
  btnTitle?: string
  btnURL?: string
  single?: boolean
  img?: any
  imgAlt?: string
  imgOne?: any
  imgOneAlt?: string
  imgTwo?: any
  imgTwoAlt?: string
}

export const articles: Article[] = [
  {
    isRightSection: true,
    title: 'Tree Services by Trusted Arborist',
    subTitle:
      'BSS Contracting offers a comprehensive range of tree services to keep your property safe and beautiful. Our certified arborists provide expert tree care, including pruning, removal, and emergency services. We use the latest equipment and techniques to ensure the health and longevity of your trees.',
    single: false,
    imgOne: treeService,
    imgOneAlt: 'Tree services by trusted arborist',
    imgTwo: treeService2,
    imgTwoAlt: 'Person working in the tree'
  },
  {
    isRightSection: false,
    title: 'Transforming Designs into Reality',
    subTitle:
      'Our skilled craftsmen bring precision and excellence to every construction project. From minor installations to substantial structural work, ScrewFast offers reliable construction services to turn your plans into tangible outcomes. We ensure the highest standards of safety and workmanship, utilizing top-quality tools and materials from our extensive inventory.',
    img: beforeAfter,
    imgAlt: 'Construction site before and after',
    btnExists: true,
    btnTitle: 'Learn More',
    btnURL: '/contact'
  },
  {
    isRightSection: true,
    title: 'Lawn Care and Maintenance Services',
    subTitle:
      'BSS Contracting provides professional lawn care and maintenance services to keep your property looking its best. Our team of experts offers a range of services, including mowing, edging, fertilization, and weed control. We use environmentally friendly products and techniques to ensure a healthy and vibrant lawn.',
    single: false,
    imgOne: lawnCare,
    imgOneAlt: 'Lawn care and maintenance services',
    imgTwo: lawnCare2,
    imgTwoAlt: 'Person mowing the lawn'
  },
  {
    isRightSection: false,
    title: 'Interior Design and Renovation Services',
    subTitle:
      "BSS Contracting's interior design and renovation services are tailored to meet your unique needs and style preferences. Our team of experts works closely with you to create a space that reflects your personality and lifestyle. From concept to completion, we handle every aspect of the project with precision and care, ensuring a beautiful and functional result.",
    img: interiorDesign,
    imgAlt: 'Interior design and renovation services by BSS Contracting'
  },
  {
    isRightSection: true,
    title: 'Fixing & Support Services',
    subTitle:
      'Our team of skilled professionals provides reliable fixing and support services to address a wide range of issues in your home or business. From minor repairs to major renovations, we have the expertise and tools to get the job done right. We offer prompt and efficient service to ensure your property is safe and functional.',
    single: false,
    imgOne: fixSupport,
    imgOneAlt: 'A man fixing electrical wires',
    imgTwo: fixSupport2,
    imgTwoAlt: 'Person fixing electrical wires',
    btnExists: true,
    btnTitle: 'Learn More',
    btnURL: '/contact'
  }
]
