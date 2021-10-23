import Head from 'next/head'
import { Layout, Menu } from 'antd'
import { useResponsive } from '../../components/Media'
import { useEffect, useState } from 'react'
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons'
import { IoLogOutOutline, IoCloseSharp } from 'react-icons/io5'
import { FiMenu } from 'react-icons/fi'
import classNames from 'classnames'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

export default function ChainPage() {
  const media = useResponsive()
  const [isOpenSider, setIsOpenSider] = useState(true)
  const isSiderCollapsed = !isOpenSider && !media.isLg
  useEffect(() => {
    if (media.isLg) {
      setIsOpenSider(false)
    }
  }, [media.isLg])
  return (
    <div className="">
      <Head>
        <title>Chain Management - Kidshop</title>
      </Head>
      <main className="min-h-screen">
        <Layout>
          <Header className="flex fixed z-10 items-center min-h-nav-height w-full">
            {isSiderCollapsed ? (
              <FiMenu
                onClick={() => setIsOpenSider(true)}
                className="text-white mr-4 block lg:hidden opacity-75 -ml-8 cursor-pointer"
                style={{ color: 'white' }}
                size={32}
              />
            ) : (
              <IoCloseSharp
                onClick={() => setIsOpenSider(false)}
                className="text-white mr-4 block lg:hidden opacity-75 -ml-8 cursor-pointer"
                size={32}
              />
            )}

            <span className="text-white font-logo hidden xs:inline text-md sm:text-xl md:text-2xl lg:text-3xl mr-4 whitespace-nowrap">
              KidsShop
            </span>
            <Menu
              theme="dark"
              mode="horizontal"
              className="w-full -mr-6"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="1">Chuỗi</Menu.Item>
              <Menu.Item key="2">Kinh doanh</Menu.Item>
              <Menu.Item key="3">Cửa hàng</Menu.Item>
              <Menu.Item key="4">Bán hàng</Menu.Item>
              <Menu.Item key="5">Nguồn hàng</Menu.Item>
              <Menu.Item key="6">Kho</Menu.Item>
              <Menu.Item key="7" className="lg:pointer-events-none">
                <div className="lg:hidden flex items-center gap-2 min-w-max">
                  <IoLogOutOutline size={18} />
                  Đăng xuất
                </div>
              </Menu.Item>
            </Menu>
            <div className="hidden lg:flex text-white items-center gap-2 min-w-max">
              <IoLogOutOutline size={18} />
              Đăng xuất
            </div>
          </Header>
          <Layout className="">
            <Sider
              collapsedWidth="0"
              collapsible
              collapsed={isSiderCollapsed}
              width={256}
              className="pt-nav-height h-screen left-0 overflow-hidden"
              style={{
                position: 'fixed',
              }}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                  <Menu.Item key="5">option5</Menu.Item>
                  <Menu.Item key="6">option6</Menu.Item>
                  <Menu.Item key="7">option7</Menu.Item>
                  <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<NotificationOutlined />}
                  title="subnav 3"
                >
                  <Menu.Item key="9">option9</Menu.Item>
                  <Menu.Item key="10">option10</Menu.Item>
                  <Menu.Item key="11">option11</Menu.Item>
                  <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout
              className={classNames(
                { 'ml-slider-width': !isSiderCollapsed },
                'p-4 md:p-6 mt-nav-height'
              )}
            >
              <Content className="site-layout-background">
                {true && text}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </main>
    </div>
  )
}

let text = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.
Rhoncus urna neque viverra justo nec ultrices dui sapien. Augue
eget arcu dictum varius. Mi eget mauris pharetra et ultrices
neque ornare aenean euismod. Mattis pellentesque id nibh tortor
id aliquet lectus proin nibh. Ac auctor augue mauris augue neque
gravida in fermentum. Pellentesque pulvinar pellentesque
habitant morbi tristique senectus. Eu facilisis sed odio morbi.
Mauris augue neque gravida in. Integer quis auctor elit sed
vulputate mi sit. Gravida arcu ac tortor dignissim convallis
aenean et. Massa tincidunt nunc pulvinar sapien et ligula
ullamcorper malesuada proin. Nunc sed blandit libero volutpat
sed. Nullam non nisi est sit amet facilisis. Nisi scelerisque eu
ultrices vitae. Ut venenatis tellus in metus. Nisl pretium fusce
id velit ut tortor. Habitant morbi tristique senectus et. Libero
enim sed faucibus turpis in eu mi. Amet consectetur adipiscing
elit ut. Aliquam nulla facilisi cras fermentum odio eu feugiat
pretium. Sed ullamcorper morbi tincidunt ornare massa. Sed
lectus vestibulum mattis ullamcorper velit. Lectus magna
fringilla urna porttitor rhoncus dolor purus non enim.
Pellentesque dignissim enim sit amet venenatis. Commodo odio
aenean sed adipiscing diam donec adipiscing tristique risus.
Ipsum dolor sit amet consectetur adipiscing. Eget nunc lobortis
mattis aliquam faucibus purus in massa. Id nibh tortor id
aliquet lectus proin nibh. Aliquet sagittis id consectetur purus
ut faucibus pulvinar. Nulla facilisi cras fermentum odio eu
feugiat. Enim eu turpis egestas pretium aenean pharetra magna
ac. Diam quam nulla porttitor massa id. Ut consequat semper
viverra nam libero justo laoreet. Consequat mauris nunc congue
nisi vitae. Gravida dictum fusce ut placerat orci. Nam aliquam
sem et tortor consequat. Non diam phasellus vestibulum lorem sed
risus ultricies. Cursus in hac habitasse platea dictumst quisque
sagittis purus sit. Pellentesque habitant morbi tristique
senectus et. Est velit egestas dui id ornare arcu odio ut sem.
Lorem ipsum dolor sit amet consectetur adipiscing elit duis.
Urna cursus eget nunc scelerisque viverra mauris. Platea
dictumst vestibulum rhoncus est. Urna neque viverra justo nec
ultrices dui sapien eget. Elementum eu facilisis sed odio morbi
quis commodo odio. Vel turpis nunc eget lorem dolor sed viverra
ipsum nunc. Vitae auctor eu augue ut lectus arcu bibendum at.
Quis commodo odio aenean sed adipiscing. Odio euismod lacinia at
quis. Blandit cursus risus at ultrices mi tempus imperdiet nulla
malesuada. Purus semper eget duis at. Vitae et leo duis ut diam
quam nulla porttitor. Quis enim lobortis scelerisque fermentum
dui faucibus. Accumsan lacus vel facilisis volutpat est velit
egestas dui id. Urna id volutpat lacus laoreet non curabitur.
Tempor commodo ullamcorper a lacus vestibulum sed. Quisque
sagittis purus sit amet volutpat consequat mauris nunc congue.
Velit sed ullamcorper morbi tincidunt ornare massa eget. Diam
phasellus vestibulum lorem sed risus ultricies tristique. Mi in
nulla posuere sollicitudin aliquam ultrices sagittis orci a.
Accumsan sit amet nulla facilisi morbi. Enim sit amet venenatis
urna cursus eget nunc. Nulla posuere sollicitudin aliquam
ultrices sagittis orci a. Diam ut venenatis tellus in metus
vulputate eu. Ut placerat orci nulla pellentesque. In eu mi
bibendum neque egestas congue quisque. Id leo in vitae turpis
massa sed elementum tempus egestas. Aliquam eleifend mi in nulla
posuere sollicitudin aliquam ultrices. Varius sit amet mattis
vulputate enim nulla aliquet porttitor. Nisl rhoncus mattis
rhoncus urna neque viverra justo. Mauris cursus mattis molestie
a iaculis. Euismod in pellentesque massa placerat duis ultricies
lacus sed turpis. Ut tellus elementum sagittis vitae et leo
duis. Ut tristique et egestas quis ipsum suspendisse ultrices
gravida dictum. Non consectetur a erat nam. Lorem ipsum dolor
sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Rhoncus urna neque
viverra justo nec ultrices dui sapien. Augue eget arcu dictum
varius. Mi eget mauris pharetra et ultrices neque ornare aenean
euismod. Mattis pellentesque id nibh tortor id aliquet lectus
proin nibh. Ac auctor augue mauris augue neque gravida in
fermentum. Pellentesque pulvinar pellentesque habitant morbi
tristique senectus. Eu facilisis sed odio morbi. Mauris augue
neque gravida in. Integer quis auctor elit sed vulputate mi sit.
Gravida arcu ac tortor dignissim convallis aenean et. Massa
tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
proin. Nunc sed blandit libero volutpat sed. Nullam non nisi est
sit amet facilisis. Nisi scelerisque eu ultrices vitae. Ut
venenatis tellus in metus. Nisl pretium fusce id velit ut
tortor. Habitant morbi tristique senectus et. Libero enim sed
faucibus turpis in eu mi. Amet consectetur adipiscing elit ut.
Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.
Sed ullamcorper morbi tincidunt ornare massa. Sed lectus
vestibulum mattis ullamcorper velit. Lectus magna fringilla urna
porttitor rhoncus dolor purus non enim. Pellentesque dignissim
enim sit amet venenatis. Commodo odio aenean sed adipiscing diam
donec adipiscing tristique risus. Ipsum dolor sit amet
consectetur adipiscing. Eget nunc lobortis mattis aliquam
faucibus purus in massa. Id nibh tortor id aliquet lectus proin
nibh. Aliquet sagittis id consectetur purus ut faucibus
pulvinar. Nulla facilisi cras fermentum odio eu feugiat. Enim eu
turpis egestas pretium aenean pharetra magna ac. Diam quam nulla
porttitor massa id. Ut consequat semper viverra nam libero justo
laoreet. Consequat mauris nunc congue nisi vitae. Gravida dictum
fusce ut placerat orci. Nam aliquam sem et tortor consequat. Non
diam phasellus vestibulum lorem sed risus ultricies. Cursus in
hac habitasse platea dictumst quisque sagittis purus sit.
Pellentesque habitant morbi tristique senectus et. Est velit
egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit
amet consectetur adipiscing elit duis. Urna cursus eget nunc
scelerisque viverra mauris. Platea dictumst vestibulum rhoncus
est. Urna neque viverra justo nec ultrices dui sapien eget.
Elementum eu facilisis sed odio morbi quis commodo odio. Vel
turpis nunc eget lorem dolor sed viverra ipsum nunc. Vitae
auctor eu augue ut lectus arcu bibendum at. Quis commodo odio
aenean sed adipiscing. Odio euismod lacinia at quis. Blandit
cursus risus at ultrices mi tempus imperdiet nulla malesuada.
Purus semper eget duis at. Vitae et leo duis ut diam quam nulla
porttitor. Quis enim lobortis scelerisque fermentum dui
faucibus. Accumsan lacus vel facilisis volutpat est velit
egestas dui id. Urna id volutpat lacus laoreet non curabitur.
Tempor commodo ullamcorper a lacus vestibulum sed. Quisque
sagittis purus sit amet volutpat consequat mauris nunc congue.
Velit sed ullamcorper morbi tincidunt ornare massa eget. Diam
phasellus vestibulum lorem sed risus ultricies tristique. Mi in
nulla posuere sollicitudin aliquam ultrices sagittis orci a.
Accumsan sit amet nulla facilisi morbi. Enim sit amet venenatis
urna cursus eget nunc. Nulla posuere sollicitudin aliquam
ultrices sagittis orci a. Diam ut venenatis tellus in metus
vulputate eu. Ut placerat orci nulla pellentesque. In eu mi
bibendum neque egestas congue quisque. Id leo in vitae turpis
massa sed elementum tempus egestas. Aliquam eleifend mi in nulla
posuere sollicitudin aliquam ultrices. Varius sit amet mattis
vulputate enim nulla aliquet porttitor. Nisl rhoncus mattis
rhoncus urna neque viverra justo. Mauris cursus mattis molestie
a iaculis. Euismod in pellentesque massa placerat duis ultricies
lacus sed turpis. Ut tellus elementum sagittis vitae et leo
duis. Ut tristique et egestas quis ipsum suspendisse ultrices
gravida dictum. Non consectetur a erat nam. Lorem ipsum dolor
sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Rhoncus urna neque
viverra justo nec ultrices dui sapien. Augue eget arcu dictum
varius. Mi eget mauris pharetra et ultrices neque ornare aenean
euismod. Mattis pellentesque id nibh tortor id aliquet lectus
proin nibh. Ac auctor augue mauris augue neque gravida in
fermentum. Pellentesque pulvinar pellentesque habitant morbi
tristique senectus. Eu facilisis sed odio morbi. Mauris augue
neque gravida in. Integer quis auctor elit sed vulputate mi sit.
Gravida arcu ac tortor dignissim convallis aenean et. Massa
tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
proin. Nunc sed blandit libero volutpat sed. Nullam non nisi est
sit amet facilisis. Nisi scelerisque eu ultrices vitae. Ut
venenatis tellus in metus. Nisl pretium fusce id velit ut
tortor. Habitant morbi tristique senectus et. Libero enim sed
faucibus turpis in eu mi. Amet consectetur adipiscing elit ut.
Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.
Sed ullamcorper morbi tincidunt ornare massa. Sed lectus
vestibulum mattis ullamcorper velit. Lectus magna fringilla urna
porttitor rhoncus dolor purus non enim. Pellentesque dignissim
enim sit amet venenatis. Commodo odio aenean sed adipiscing diam
donec adipiscing tristique risus. Ipsum dolor sit amet
consectetur adipiscing. Eget nunc lobortis mattis aliquam
faucibus purus in massa. Id nibh tortor id aliquet lectus proin
nibh. Aliquet sagittis id consectetur purus ut faucibus
pulvinar. Nulla facilisi cras fermentum odio eu feugiat. Enim eu
turpis egestas pretium aenean pharetra magna ac. Diam quam nulla
porttitor massa id. Ut consequat semper viverra nam libero justo
laoreet. Consequat mauris nunc congue nisi vitae. Gravida dictum
fusce ut placerat orci. Nam aliquam sem et tortor consequat. Non
diam phasellus vestibulum lorem sed risus ultricies. Cursus in
hac habitasse platea dictumst quisque sagittis purus sit.
Pellentesque habitant morbi tristique senectus et. Est velit
egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit
amet consectetur adipiscing elit duis. Urna cursus eget nunc
scelerisque viverra mauris. Platea dictumst vestibulum rhoncus
est. Urna neque viverra justo nec ultrices dui sapien eget.
Elementum eu facilisis sed odio morbi quis commodo odio. Vel
turpis nunc eget lorem dolor sed viverra ipsum nunc. Vitae
auctor eu augue ut lectus arcu bibendum at. Quis commodo odio
aenean sed adipiscing. Odio euismod lacinia at quis. Blandit
cursus risus at ultrices mi tempus imperdiet nulla malesuada.
Purus semper eget duis at. Vitae et leo duis ut diam quam nulla
porttitor. Quis enim lobortis scelerisque fermentum dui
faucibus. Accumsan lacus vel facilisis volutpat est velit
egestas dui id. Urna id volutpat lacus laoreet non curabitur.
Tempor commodo ullamcorper a lacus vestibulum sed. Quisque
sagittis purus sit amet volutpat consequat mauris nunc congue.
Velit sed ullamcorper morbi tincidunt ornare massa eget. Diam
phasellus vestibulum lorem sed risus ultricies tristique. Mi in
nulla posuere sollicitudin aliquam ultrices sagittis orci a.
Accumsan sit amet nulla facilisi morbi. Enim sit amet venenatis
urna cursus eget nunc. Nulla posuere sollicitudin aliquam
ultrices sagittis orci a. Diam ut venenatis tellus in metus
vulputate eu. Ut placerat orci nulla pellentesque. In eu mi
bibendum neque egestas congue quisque. Id leo in vitae turpis
massa sed elementum tempus egestas. Aliquam eleifend mi in nulla
posuere sollicitudin aliquam ultrices. Varius sit amet mattis
vulputate enim nulla aliquet porttitor. Nisl rhoncus mattis
rhoncus urna neque viverra justo. Mauris cursus mattis molestie
a iaculis. Euismod in pellentesque massa placerat duis ultricies
lacus sed turpis. Ut tellus elementum sagittis vitae et leo
duis. Ut tristique et egestas quis ipsum suspendisse ultrices
gravida dictum. Non consectetur a erat nam. Lorem ipsum dolor
sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Rhoncus urna neque
viverra justo nec ultrices dui sapien. Augue eget arcu dictum
varius. Mi eget mauris pharetra et ultrices neque ornare aenean
euismod. Mattis pellentesque id nibh tortor id aliquet lectus
proin nibh. Ac auctor augue mauris augue neque gravida in
fermentum. Pellentesque pulvinar pellentesque habitant morbi
tristique senectus. Eu facilisis sed odio morbi. Mauris augue
neque gravida in. Integer quis auctor elit sed vulputate mi sit.
Gravida arcu ac tortor dignissim convallis aenean et. Massa
tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
proin. Nunc sed blandit libero volutpat sed. Nullam non nisi est
sit amet facilisis. Nisi scelerisque eu ultrices vitae. Ut
venenatis tellus in metus. Nisl pretium fusce id velit ut
tortor. Habitant morbi tristique senectus et. Libero enim sed
faucibus turpis in eu mi. Amet consectetur adipiscing elit ut.
Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.
Sed ullamcorper morbi tincidunt ornare massa. Sed lectus
vestibulum mattis ullamcorper velit. Lectus magna fringilla urna
porttitor rhoncus dolor purus non enim. Pellentesque dignissim
enim sit amet venenatis. Commodo odio aenean sed adipiscing diam
donec adipiscing tristique risus. Ipsum dolor sit amet
consectetur adipiscing. Eget nunc lobortis mattis aliquam
faucibus purus in massa. Id nibh tortor id aliquet lectus proin
nibh. Aliquet sagittis id consectetur purus ut faucibus
pulvinar. Nulla facilisi cras fermentum odio eu feugiat. Enim eu
turpis egestas pretium aenean pharetra magna ac. Diam quam nulla
porttitor massa id. Ut consequat semper viverra nam libero justo
laoreet. Consequat mauris nunc congue nisi vitae. Gravida dictum
fusce ut placerat orci. Nam aliquam sem et tortor consequat. Non
diam phasellus vestibulum lorem sed risus ultricies. Cursus in
hac habitasse platea dictumst quisque sagittis purus sit.
Pellentesque habitant morbi tristique senectus et. Est velit
egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit
amet consectetur adipiscing elit duis. Urna cursus eget nunc
scelerisque viverra mauris. Platea dictumst vestibulum rhoncus
est. Urna neque viverra justo nec ultrices dui sapien eget.
Elementum eu facilisis sed odio morbi quis commodo odio. Vel
turpis nunc eget lorem dolor sed viverra ipsum nunc. Vitae
auctor eu augue ut lectus arcu bibendum at. Quis commodo odio
aenean sed adipiscing. Odio euismod lacinia at quis. Blandit
cursus risus at ultrices mi tempus imperdiet nulla malesuada.
Purus semper eget duis at. Vitae et leo duis ut diam quam nulla
porttitor. Quis enim lobortis scelerisque fermentum dui
faucibus. Accumsan lacus vel facilisis volutpat est velit
egestas dui id. Urna id volutpat lacus laoreet non curabitur.
Tempor commodo ullamcorper a lacus vestibulum sed. Quisque
sagittis purus sit amet volutpat consequat mauris nunc congue.
Velit sed ullamcorper morbi tincidunt ornare massa eget. Diam
phasellus vestibulum lorem sed risus ultricies tristique. Mi in
nulla posuere sollicitudin aliquam ultrices sagittis orci a.
Accumsan sit amet nulla facilisi morbi. Enim sit amet venenatis
urna cursus eget nunc. Nulla posuere sollicitudin aliquam
ultrices sagittis orci a. Diam ut venenatis tellus in metus
vulputate eu. Ut placerat orci nulla pellentesque. In eu mi
bibendum neque egestas congue quisque. Id leo in vitae turpis
massa sed elementum tempus egestas. Aliquam eleifend mi in nulla
posuere sollicitudin aliquam ultrices. Varius sit amet mattis
vulputate enim nulla aliquet porttitor. Nisl rhoncus mattis
rhoncus urna neque viverra justo. Mauris cursus mattis molestie
a iaculis. Euismod in pellentesque massa placerat duis ultricies
lacus sed turpis. Ut tellus elementum sagittis vitae et leo
duis. Ut tristique et egestas quis ipsum suspendisse ultrices
gravida dictum. Non consectetur a erat nam. Lorem ipsum dolor
sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Rhoncus urna neque
viverra justo nec ultrices dui sapien. Augue eget arcu dictum
varius. Mi eget mauris pharetra et ultrices neque ornare aenean
euismod. Mattis pellentesque id nibh tortor id aliquet lectus
proin nibh. Ac auctor augue mauris augue neque gravida in
fermentum. Pellentesque pulvinar pellentesque habitant morbi
tristique senectus. Eu facilisis sed odio morbi. Mauris augue
neque gravida in. Integer quis auctor elit sed vulputate mi sit.
Gravida arcu ac tortor dignissim convallis aenean et. Massa
tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada
proin. Nunc sed blandit libero volutpat sed. Nullam non nisi est
sit amet facilisis. Nisi scelerisque eu ultrices vitae. Ut
venenatis tellus in metus. Nisl pretium fusce id velit ut
tortor. Habitant morbi tristique senectus et. Libero enim sed
faucibus turpis in eu mi. Amet consectetur adipiscing elit ut.
Aliquam nulla facilisi cras fermentum odio eu feugiat pretium.
Sed ullamcorper morbi tincidunt ornare massa. Sed lectus
vestibulum mattis ullamcorper velit. Lectus magna fringilla urna
porttitor rhoncus dolor purus non enim. Pellentesque dignissim
enim sit amet venenatis. Commodo odio aenean sed adipiscing diam
donec adipiscing tristique risus. Ipsum dolor sit amet
consectetur adipiscing. Eget nunc lobortis mattis aliquam
faucibus purus in massa. Id nibh tortor id aliquet lectus proin
nibh. Aliquet sagittis id consectetur purus ut faucibus
pulvinar. Nulla facilisi cras fermentum odio eu feugiat. Enim eu
turpis egestas pretium aenean pharetra magna ac. Diam quam nulla
porttitor massa id. Ut consequat semper viverra nam libero justo
laoreet. Consequat mauris nunc congue nisi vitae. Gravida dictum
fusce ut placerat orci. Nam aliquam sem et tortor consequat. Non
diam phasellus vestibulum lorem sed risus ultricies. Cursus in
hac habitasse platea dictumst quisque sagittis purus sit.
Pellentesque habitant morbi tristique senectus et. Est velit
egestas dui id ornare arcu odio ut sem. Lorem ipsum dolor sit
amet consectetur adipiscing elit duis. Urna cursus eget nunc
scelerisque viverra mauris. Platea dictumst vestibulum rhoncus
est. Urna neque viverra justo nec ultrices dui sapien eget.
Elementum eu facilisis sed odio morbi quis commodo odio. Vel
turpis nunc eget lorem dolor sed viverra ipsum nunc. Vitae
auctor eu augue ut lectus arcu bibendum at. Quis commodo odio
aenean sed adipiscing. Odio euismod lacinia at quis. Blandit
cursus risus at ultrices mi tempus imperdiet nulla malesuada.
Purus semper eget duis at. Vitae et leo duis ut diam quam nulla
porttitor. Quis enim lobortis scelerisque fermentum dui
faucibus. Accumsan lacus vel facilisis volutpat est velit
egestas dui id. Urna id volutpat lacus laoreet non curabitur.
Tempor commodo ullamcorper a lacus vestibulum sed. Quisque
sagittis purus sit amet volutpat consequat mauris nunc congue.
Velit sed ullamcorper morbi tincidunt ornare massa eget. Diam
phasellus vestibulum lorem sed risus ultricies tristique. Mi in
nulla posuere sollicitudin aliquam ultrices sagittis orci a.
Accumsan sit amet nulla facilisi morbi. Enim sit amet venenatis
urna cursus eget nunc. Nulla posuere sollicitudin aliquam
ultrices sagittis orci a. Diam ut venenatis tellus in metus
vulputate eu. Ut placerat orci nulla pellentesque. In eu mi
bibendum neque egestas congue quisque. Id leo in vitae turpis
massa sed elementum tempus egestas. Aliquam eleifend mi in nulla
posuere sollicitudin aliquam ultrices. Varius sit amet mattis
vulputate enim nulla aliquet porttitor. Nisl rhoncus mattis
rhoncus urna neque viverra justo. Mauris cursus mattis molestie
a iaculis. Euismod in pellentesque massa placerat duis ultricies
lacus sed turpis. Ut tellus elementum sagittis vitae et leo
duis. Ut tristique et egestas quis ipsum suspendisse ultrices
gravida dictum. Non consectetur a erat nam.`
