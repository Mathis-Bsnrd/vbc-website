import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Snackbar, Alert } from "@mui/material";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const onSubmit = (data) => {
    console.log("Données du formulaire: ", data);
    reset();
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
        {/* Nom */}
        <TextField
          label="Nom"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          {...register("name", { required: "Le nom est requis" })}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />

        {/* Adresse mail */}
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
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />

        {/* Message */}
        <TextField
          label="Message"
          variant="outlined"
          required
          fullWidth
          margin="normal"
          multiline
          rows={4}
          {...register("message", { required: "Le message est requis" })}
          error={!!errors.message}
          helperText={errors.message ? errors.message.message : ""}
        />

        {/* Bouton de soumission */}
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#A5120D" }}
        >
          Envoyer
        </Button>
      </Box>

      {/* Snackbar pour afficher le message de succès */}
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
