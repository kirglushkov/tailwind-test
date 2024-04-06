import Row from "./Row"

const DATA = [
  {
    name: 'Catalog',
    url: 'catalogapp.io',
    icon: 'icon1.jpg',
    progress: 33,
    statusValue: 9,
    status: false,
    date: '22 jan 2022',
    license: [{ name: 'Active', dot: true, textColor: '#027a48', bgColor: '#ecfdf3' }, { name: 'Business', dot: false, textColor: '#6941c6', bgColor: '#f9f5ff' }, { name: 'Inactvice', dot: true, textColor: '##344054', bgColor: '#f2f4f7' }],
  },
  {
    name: 'Catalog',
    url: 'catalogapp.io',
    icon: 'icon1.jpg',
    progress: 12,
    statusValue: 66,
    status: false,
    date: '22 jan 2022',
    license: [{ name: 'Active', dot: true, textColor: '#027a48', bgColor: '#ecfdf3' }, { name: 'Business', dot: false, textColor: '#6941c6', bgColor: '#f9f5ff' }, { name: 'Inactvice', dot: true, textColor: '##344054', bgColor: '#f2f4f7' }],
  },
  {
    name: 'Catalog',
    url: 'catalogapp.io',
    icon: 'icon1.jpg',
    progress: 90,
    statusValue: 4,
    status: false,
    date: '22 jan 2022',
    license: [{ name: 'Active', dot: true, textColor: '#027a48', bgColor: '#ecfdf3' }, { name: 'Business', dot: false, textColor: '#6941c6', bgColor: '#f9f5ff' }, { name: 'Inactvice', dot: true, textColor: '##344054', bgColor: '#f2f4f7' }],
  },
]

const Content = () => {
  return (
    <div>
    {DATA.map((item, index) => {
      return (
        <Row key={index} name={item.name} url={item.url} icon={item.icon} progress={item.progress} status={item.status} statusValue={item.statusValue} date={item.date} license={item.license} />
      )
    })}
  </div>
  )
}

export default Content