// packages
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// components
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Formik } from 'formik'

// Styles
const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: '2rem auto 0 auto',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  field: {
    marginTop: 20,
  },
})

// Types
interface MyFormValues {
  email: string
  password: string
}

// Component
const SignUp = () => {
  const classes = useStyles()

  const initialValues: MyFormValues = { email: '', password: '' }

  return (
    <Formik
      initialValues={initialValues}
      validate={(values: MyFormValues) => {
        const errors: any = {}

        if (!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))

          setSubmitting(false)
        }, 400)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
                Регистрация
              </Typography>

              {/* E-mail field */}
              <TextField
                className={classes.field}
                fullWidth={true}
                placeholder="Почта"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email === 'Invalid email address' ? true : false}
              />

              {/* Password field */}
              <TextField
                className={classes.field}
                placeholder="Пароль"
                fullWidth={true}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              {/* Password confirmation field */}
              <TextField
                className={classes.field}
                placeholder="Подтверждение пароля"
                fullWidth={true}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </CardContent>

            <CardActions>
              <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
                Отправить
              </Button>
            </CardActions>
          </Card>
        </form>
      )}
    </Formik>
  )
}

export default SignUp
