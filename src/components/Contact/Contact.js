import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (data) => {
    console.log("Données du formulaire: ", data);

    setFormValues({
      name: "",
      email: "",
      message: "",
    });

    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div>
      <h1>Contact</h1>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          maxWidth: 500,
          margin: "auto",
          mt: 5,
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiOutlinedInput-root": {
            "&:hover fieldset": {
              borderColor: "black",
            },
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        }}
      >
        <TextField
          label="Nom"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          {...register("name", { required: "Le nom est requis" })}
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />

        <TextField
          label="Adresse mail"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          {...register("email", {
            required: "L'adresse mail est requise",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              message: "Veuillez entrer une adresse mail valide",
            },
          })}
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />

        <TextField
          label="Message"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
          {...register("message", { required: "Le message est requis" })}
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
          error={!!errors.message}
          helperText={errors.message ? errors.message.message : ""}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#A5120D" }}
        >
          Envoyer
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Message envoyé avec succès !
        </Alert>
      </Snackbar>
    </div>
  );
}
