//-----------  Imports  -----------//

import questionnaires from 'data/questionnaires'

//-----------  Exports  -----------//

export default [{
  to       : '/consent',
  title    : 'Consent',
  disabled : true,
  nested   : [{
    to       : '/info',
    title    : 'Informed Consent',
    disabled : true,
  },{
    to       : '/sharing',
    title    : 'Data Sharing',
    disabled : true,
  }]
},{
  to       : '/capacity',
  title    : 'Study Quiz',
  disabled : true,
},{
  to       : '/consent/signature',
  title    : 'Signature',
  disabled : true,
},{
  to       : '/questionnaires',
  title    : 'Questionnaires',
  disabled : true,
  nested   : questionnaires.map(({ slug, title }) => ({
    to       : '/' + slug,
    title    : title,
    disabled : true,
  }))
},{
  to       : '/release',
  title    : 'PHI Release',
  disabled : true,
},{
  to       : '/schedule',
  title    : 'Schedule Interview',
  disabled : true,
}]