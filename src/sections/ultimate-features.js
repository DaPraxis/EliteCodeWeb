/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import dataImage from 'assets/images/features/data.png'
import programmingImage from 'assets/images/features/programing.png'
import careerImage from 'assets/images/features/career.png'
import educationImage from 'assets/images/features/education.png'
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: educationImage,
    path: '#!',
    title: '学业规划',
    description: "升研季感到迷茫？我们有优秀的学哥学姐来帮助你选择专业、寻找导师、填写相关申请资料",
    list: [
      "研究生/博士申请",
      "申请文书",
      "Letter of Intent",
      "Cover Letter",
      "推荐信",
      "学业指导"
    ]
  },
  {
    id: 2,
    icon: dataImage,
    path: '#!',
    title: '转数据方向',
    description: `想站到数据世纪的风口浪尖，从事数据相关的工作？我们有专业的业内人士，手把手带你从理论到实践、从统计数据到人工智能`,
    list: [
      "人工智能 Python",
      "数据可视化 Tableu",
      "数据库 SQL",
      "统计 R"
    ]
  },
  {
    id: 3,
    icon: programmingImage,
    path: '#!',
    title: '转码',
    description: `想要转码却苦于没有头绪？我们有专业的导师团队，根据你的技术背景提供合适的Bootcamp课程--UI/UX设计、前端后端交互、数据库、system design等丰富你的简历`,
    list: [
      "前端设计",
      "Html/CSS/React.js",
      "SDE",
      "Data Structure"
    ]
  },
  {
    id: 4,
    icon: careerImage,
    path: '#!',
    title: '职业规划',
    description: `无论你是找第一份工作，还是想要升职加薪，我们有行业大牛提供内推机会、传播大厂经验--助你面试一路通关战将`,
    list:[
      "内推Referral",
      "Coffee Chat资源/技巧",
      "Resume/Cover Letter",
      "Technical Interview",
      "Behavioural Interview"
    ]
  },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Ideal solutions for you"
          title="我们提供的服务"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
