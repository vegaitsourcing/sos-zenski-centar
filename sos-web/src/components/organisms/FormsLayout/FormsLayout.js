import { color } from '../../../styles/config/theme';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { Categories } from '../Categories/Categories';
import { ClientInfo } from '../ClientInfo/ClientInfo';
import {
  StyledShell,
  StyledContainer,
  StyledColumn,
  StyledAccordion,
  StyledQuestion,
  StyledGrid,
  // StyledNoResults,
  // StyledHeading,
} from './FormsLayout.styles';

const categoryData = {
  sectionId: 'id',
  sectionName: 'Opis usluge',
  questions: [
    {
      id: 'opis-problema',
      icon: 'any',
      label: 'Kratak Opis Problema',
      options: [
        {
          id: 'id',
          label: 'opis 1',
        },
        {
          id: 'id2',
          label: 'opis 2',
        },
        {
          id: 'id3',
          label: 'opis 3',
        },
      ],
      condition: null,
    },
    {
      id: 'neki-treci',
      icon: 'any',
      label: 'Treci Opis Problema',
      options: [
        {
          id: 'treciId',
          label: 'Treci opis 1',
        },
        {
          id: 'treciId2',
          label: 'Treci opis 2',
        },
        {
          id: 'itrecid3',
          label: 'Treci opis 3',
        },
      ],
      condition: {
        questionId: 'opis-problema',
        anaswerId: null,
      },
    },
    {
      id: 'tip-poziva',
      icon: 'any',
      label: 'Tip poziva',
      options: [
        {
          id: 'idTipid',
          label: 'tip 1',
        },
        {
          id: 'idTip2',
          label: 'tip 2',
        },
        {
          id: 'idTip3',
          label: 'tip 3',
        },
      ],
      condition: {
        questionId: 'opis-problema',
        anaswerId: 'id3',
      },
    },
    {
      id: 'opis-problema3',
      icon: 'any',
      label: 'Kratak Opis Problema2',
      options: [
        {
          id: 'id5',
          label: 'opis 1',
        },
        {
          id: 'id62',
          label: 'opis 2',
        },
        {
          id: 'id73',
          label: 'opis 3',
        },
      ],
      condition: null,
    },
    {
      id: 'neki-treci8',
      icon: 'any',
      label: 'Treci Opis Problema2',
      options: [
        {
          id: 'treciId5',
          label: 'Treci opis 1',
        },
        {
          id: 'treciId72',
          label: 'Treci opis 2',
        },
        {
          id: 'itrecid38',
          label: 'Treci opis 3',
        },
      ],
      condition: {
        questionId: 'opis-problema',
        anaswerId: null,
      },
    },
    {
      id: 'tip-poziva4',
      icon: 'any',
      label: 'Tip poziva2',
      options: [
        {
          id: 'idTipid9',
          label: 'tip 1',
        },
        {
          id: 'idTip266',
          label: 'tip 2',
        },
        {
          id: 'idTip376',
          label: 'tip 3',
        },
      ],
      condition: {
        questionId: 'opis-problema',
        anaswerId: 'id3',
      },
    },
  ],
};

export const FormsLayout = () => {
  return (
    <StyledShell
      backgroundColor={color.pinkLight}
      title="Evidentiraj novi poziv"
    >
      <Categories />
      <StyledContainer>
        {/* <StyledNoResults>
          <StyledHeading type="h1">Izaberi kategoriju</StyledHeading>
        </StyledNoResults> */}
        <StyledColumn>
          <StyledAccordion
            $noPadding
            title="Informacije o klijentu"
            isClickable={false}
          >
            <ClientInfo />
          </StyledAccordion>
          <Accordion isReverse title="Intervencije SOS Ženskog Centra">
            <StyledGrid>
              {categoryData.questions.map(
                ({ label, id, options, condition }) => (
                  <StyledQuestion
                    key={id}
                    label={label}
                    id={id}
                    options={options}
                    condition={condition}
                  />
                ),
              )}
            </StyledGrid>
          </Accordion>
        </StyledColumn>
        <StyledColumn>
          <StyledAccordion title={categoryData.sectionName} isClickable={false}>
            {categoryData.questions.map(({ label, id, options, condition }) => (
              <StyledQuestion
                key={id}
                label={label}
                id={id}
                options={options}
                condition={condition}
              />
            ))}
          </StyledAccordion>
        </StyledColumn>
      </StyledContainer>
    </StyledShell>
  );
};