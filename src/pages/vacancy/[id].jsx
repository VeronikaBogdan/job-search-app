import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Box, Stack, TypographyStylesProvider } from '@mantine/core';

import { Layout } from '@/components/layout/layout';
import { Card } from '@/components/cards/card/card';

import { useStyles } from '@/styles/vacancy-styles';

const Vacancy = () => {
  const { classes } = useStyles();
  const { vacancies } = useSelector((state) => state.vacancies);
  const { asPath } = useRouter();

  const vacancyId = asPath.slice(9);

  const vacancyRichText =
    '<i>Мы ищем разработчиков в команду развития облачной интеграционной платформы Сбербанка. Мы обеспечиваем доставку миллионов запросов ежедневно и помогаем развивать экосистему Сбербанка.</i><br /><p>Работаем с ведущими тех. стандартами для построения облачных приложений и микросервисных архитектур: Kubernates, Istio service mesh, OpenShift, Docker.</p><p><b>О нас:</b></p><p>Проект находится в активной фазе своего развития и имеет большую потребность, как со стороны бизнеса, так и со стороны платформ Банка:</p><ul><li>Мы работаем на open-source стеке технологий</li><li>Мы разрабатываем высоконагруженные (более 100 000 tps) и отказоустойчивые (99,99) технологии обмена и потоковой обработки событий</li></ul><ul><li>Мы помогаем развивать экосистему Сбербанка, наши продукты - важные интеграционные элементы экосистемы и одни из ключевых продуктов в поставщике облачных решений SberCloud.</li><li>У нас приветствуется opensource contribution</li></ul><p>Результатом твоих трудов станет решение, которое позволит выйти Банку за рамки традиционных для него request/response архитектур и значительно повысить распределенность систем, при этом уменьшая T2M.</p><p><b>О твоих задачах:</b></p><ul><li>Разработка модулей интеграционной платформы Банка: мониторинг, autoscaling, компоненты безопасности, типовые интеграционные компоненты.</li><li>разработка cloud native компонент, автоматизация работы с cloud (OpenShift API);</li><li>проектирование, разработка, внедрение высоконагруженных интеграционных сервисов платформы (backend, микросервисы, cloud-native);</li><li>работа с CI/CD, инструментами деплоя, инфраструктурой: Jenkins, Docker, Kubernetes (OpenShift).</li></ul><p><b>Ты нам подходишь, если у тебя есть</b></p><ul><li>Уверенные знания Golang;</li><li>опыт разработки высоконагруженных приложений;</li><li>понимание принципов микросервисной архитектуры;</li><li>понимание и опыт работы с Docker, Kubernetes.</li></ul><p><b>Работа у нас — это:</b></p><ul><li>Команда профессионалов, готовых поддержать ваши инициативы;</li><li>мощное железо, дополнительные мониторы и всё, что нужно для продуктивной работы;</li><li>возможность работы с новыми технологиями;</li><li>Обучение за счёт компании;</li><li>прозрачная система бонусов и премий, достойная зарплата — размер обсудим на собеседовании;</li><li>социальный пакет + ДМС;</li><li>корпоративная программа лояльности (льготное кредитование, скидки в компаниях-партнерах</li></ul>';
  return (
    <Layout>
      <Stack className={classes.content}>
        <Card
          profession='Менеджер-дизайнер'
          firmName=''
          location='Новый Уренгой'
          typeOfWork='Полный рабочий день'
          paymentFrom='70000'
          paymentTo='0'
          currency='rub'
        />
        {/* <Card
            profession={vacancy.profession}
            firmName={vacancy.firm_name}
            location={vacancy.town.title}
            typeOfWork={vacancy.type_of_work.title}
            paymentFrom={vacancy.payment_from}
            paymentTo={vacancy.payment_to}
            currency={vacancy.currency}
          /> */}
        <Box className={classes.vacancyRichText}>
          <TypographyStylesProvider>
            <div dangerouslySetInnerHTML={{ __html: vacancyRichText }} />
          </TypographyStylesProvider>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Vacancy;
