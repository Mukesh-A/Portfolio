import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      title: 'Skill',
      name: 'skill',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
