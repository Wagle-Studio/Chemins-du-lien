import { GlobalConfig } from 'payload'
import { Introduction } from '@/blocks/introduction/config'
import { IntroductionWorkshop } from '@/blocks/introduction-workshop/config'
import { IntroductionTeam } from '@/blocks/introduction-team/config'
import { Instagram } from '@/blocks/instagram/config'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: "Page d'accueil",
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'banner',
      label: 'Image de banière',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'blocks',
      label: 'Blocs de la page',
      type: 'blocks',
      blocks: [Introduction, IntroductionWorkshop, IntroductionTeam, Instagram],
    },
  ],
}
