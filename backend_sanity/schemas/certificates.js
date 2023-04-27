export default {
  name: 'certificates',
  title: 'Certificates',
  type: 'document',
  fields: [
    {
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'certificatesLink',
      title: 'Certificates Link',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          name: 'tag',
          title: 'Tag',
          type: 'string'
        }
      ]
    },
  ]
}