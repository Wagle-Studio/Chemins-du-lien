import { Block } from 'payload'
import { RichTextMinimal } from '@/fields/RichTextMinimal'

export const IntroductionTeam: Block = {
  slug: 'introduction_team',
  labels: {
    singular: 'Introduction Girafons',
    plural: 'Introductions Girafons',
  },
  imageURL: '/block_illustrations/block_introduction_girafons.jpg',
  fields: [
    {
      name: 'background',
      label: 'Fond gris',
      type: 'checkbox',
    },
    {
      name: 'title',
      label: 'Titre',
      type: 'text',
      required: true,
    },
    RichTextMinimal('description', 'Description', true),
    {
      name: 'highlight-video',
      label: 'Vidéo mise en avant',
      type: 'group',
      fields: [
        {
          name: 'title',
          label: 'Titre de la vidéo',
          type: 'text',
          required: true,
        },
        {
          name: 'miniature',
          label: 'Miniature de la vidéo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'video',
          label: 'Vidéo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'members',
      label: 'Membre du collectif',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'profile-picture',
          label: 'Photo de profil',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
