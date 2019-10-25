import Hero from '../components/molecules/Hero'
import SplitContentBlock from '../components/organisms/SplitContentBlock'
import FloatingCards from '../components/organisms/FloatingCards'
import ContactSection from '../components/organisms/ContactSection'

export default function LoadBlock(layout = []) {
  let rendered = []

  layout.map((block, index) => {
    switch (block.acf_fc_layout) {
      case 'hero':
        rendered.push(<Hero key={`Hero-${index}`} {...block} />)
        break
      case 'split_content_block':
        rendered.push(<SplitContentBlock key={`SplitContentBlock-${index}`} {...block} />)
        break
      case 'floating_cards':
        rendered.push(<FloatingCards key={`FloatingCards-${index}`} {...block} />)
        break
      case 'contact_section':
        rendered.push(<ContactSection key={`ContactSection-${index}`} {...block} />)
        break
      default:
        console.warn(`Section mismatch encountered at index ${ index }. Key: ${block.acf_fc_layout}`)
        break
    }

    return rendered
  })

  return rendered
}
