import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import React from 'react'
import styles from './HelpAccordion.module.scss'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function HelpAccordion({
  img,
  title,
  backgroundColor,
  children,
  expanded,
  setExpanded,
}) {
  return (
    <div className={styles.container}>
      <Accordion
        onChange={() => setExpanded(!expanded)}
        className={styles.accordion}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              className={styles.more__btn}
              sx={{ color: 'white', fontSize: 55, minHeight: '134px' }}
            />
          }
          id="panel1a-header"
          sx={{ background: backgroundColor, borderRadius: '10px' }}
        >
          <div className={styles.accordion__summary}>
            <img src={img} alt="user" />
            <div className={styles.info}>
              <Typography sx={{ fontFamily: 'Gilroy', fontSize: '12px' }}>
                Категория
              </Typography>
              <Typography component="h2" className={styles.title}>
                {title}
              </Typography>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className={styles.child}>{children}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default HelpAccordion
