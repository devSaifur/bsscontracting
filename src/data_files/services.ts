// Import necessary images
import blueprints from '@images/blueprints-image.avif'
import personWorking from '@images/person-working.avif'
import beforeAfter from '@images/before-after.avif'
import constructionWorkers from '@images/construction-workers.avif'
import aerialView from '@images/aerial-view.avif'
import usingTools from '@images/using-tools.avif'
import progressBuilding from '@images/progress-building.avif'
import underConstruction from '@images/under-construction.avif'

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
    title: 'Delivering Expert Guidance',
    subTitle:
      'Embarking on a construction project can be overwhelming. With our professional consultation services, we guide you through every stage, ensuring you make informed decisions. Whether you are a DIY enthusiast or a skilled contractor, our experts are on hand to offer tailored advice on product selection, project scope, and compliance with local regulations.',
    single: false,
    imgOne: blueprints,
    imgOneAlt: 'Blueprints and digital tablet with construction plans.',
    imgTwo: personWorking,
    imgTwoAlt: 'Person working in the office'
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
    btnURL: '#'
  },
  {
    isRightSection: true,
    title: 'Navigating Projects with Professional Oversight',
    subTitle:
      'Effective project management is at the heart of any successful build. ScrewFast provides thorough planning and robust management services that keep your project on time and within budget. Let us handle the complexities of workflow coordination, resource allocation, and stakeholder communication while you focus on your vision.',
    single: false,
    imgOne: constructionWorkers,
    imgOneAlt: 'Construction workers orchestrating a project',
    imgTwo: aerialView,
    imgTwoAlt: 'Aerial view of managed construction'
  },
  {
    isRightSection: false,
    title: 'Ensuring Long-lasting Performance',
    subTitle:
      "Our commitment to your project doesn't end at completion. ScrewFast offers ongoing maintenance and support services to ensure your construction's longevity and performance. From regular check-ups to emergency assistance, our responsive team is there to provide seamless support.",
    img: usingTools,
    imgAlt:
      'Man in orange and black vest wearing white helmet holding yellow and black power tool'
  },
  {
    isRightSection: true,
    title: 'Crafting Bespoke Strategies for Unique Challenges',
    subTitle:
      'For our larger enterprise clients, ScrewFast offers custom solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward.',
    single: false,
    imgOne: progressBuilding,
    imgOneAlt: 'In progress building structure',
    imgTwo: underConstruction,
    imgTwoAlt: 'Brown and gray building under construction',
    btnExists: true,
    btnTitle: 'Read more',
    btnURL: '#'
  }
]
