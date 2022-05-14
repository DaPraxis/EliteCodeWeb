/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    id: 1,
    title: `01. 从开始学习到找到第一份工作要花多长时间？`,
    contents: (
      <div>
        <p>根据大家不同的背景，每个人的节奏与紧迫性也有所不同。Elite Code旨在给大家提供丰富、充足的学习资源，使你的求职之路更加平坦，更加通顺。</p>
        <p>我们<b>不是封闭式集中培训</b>，学习时间长短也会因人而异。当然如果您需要，我们会为您<b>量身制定科学而有效的学习/求职计划表</b>，并严格监督执行。
        详情请与我们的客服联系。</p>
      </div>
    ),
  },
  {
    id: 2,
    title: `02. 你们能帮忙找实习吗？`,
    contents: (
      <div>
        <p>如果有需要，我们会为学生提供可以提升个人能力的实习，<b>而不是付费买的实习</b>，这也是我们帮助您申请到加拿大最顶级的公司的途径之一。</p>
        <p>比如，您是大二找到我们，背景是统计学专业，没有代码经验，想毕业对口data scientist。</p>
        <p>我们会为您在大二暑假之前补习SQL 和 R 相关的基础知识，为您安排和行业大佬coffee chat的机会来了解市场行情和岗位职责，并在暑假为您内推五大行的 
          data analyst 职位；大三暑假前学习Python/Tableu相关的自动化和数据可视化，
          在大三暑假内推四大会计事务所的 data scientist 职位。在实习结束后，根据您的就职体验和薪资满意度，还可以为您补习机械学习/人工智能相关的知识，
          并内推 machine learning scientist/数据的senior岗位。
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: `03. 你们如何收费？`,
    contents: (
      <div>
        由于每个学员的学习计划和需求不同，我们的收费方式也很flexible。通常的流程是这样的：您首先填写您的相关信息，我们的客服会根据您的情况安排导师/辅导员，
        在三个工作日内联系您，详细了解您当前的需求。我们提供单项服务进行收费，或者为您量身订制一个优惠价package。我们旨在为您服务，
        帮助您学习、成长、求职，不会像其他中介那样收取一定百分比的工作收入当作佣金。
      </div>
    ),
  },
  {
    id: 4,
    title: `04. 进入你们program需要面试吗？有什么要求呢？`,
    contents: (
      <div>
        在加入我们的program之前，我们是会有一个小小的面试。当然，我们的面试不是用来筛选人，而是是我们更多的了解您，从而帮助您。我们用面试的方式不仅是来了解
        您的从业背景和hard skills，同时也能测试您的soft skill 比如随机应变能力和面试的抗压能力，从而使我们更有针对性地为您推荐与制定学习计划。
      </div>
    ),
  },
  {
    id: 5,
    title: `05. 什么时候Program结束？`,
    contents: (
      <div>
        <p>从师生的意义上来讲，在您拿到自己满意的offer，我们的program就结束了，但实际上我们的很多学生在工作后仍然联系我们，向我们咨询工作的经验与职业发展，比如
        怎么和HR谈薪资、如何无缝跳到其他的组、咨询猎头信息等等。我们会持续为学生们提供帮助，为他们牵线搭桥更多业内资源和学习新的知识。</p>
        <p>我们的很多学生在毕业后甚至会申请加入我们的团队，成为导师或者咨询人脉，以过来人的身份帮助其他学生，从而形成<b>正向的资源循环。</b></p>
        <p>所以，加入我们，不仅是参加辅导课和bootcamp，更是加入一个<b>圈子</b>， <b>our program NEVER end</b></p>
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Get your question answer"
          title="Q/A"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Button as="a" href = "https://form.jotform.com/221316375057251">Still Question? Contact us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
