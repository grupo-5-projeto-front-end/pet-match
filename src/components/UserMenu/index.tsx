import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledUserMenu, StyledLink } from "./style";
import { StyledButton } from "../Button/style";


const Logo = require("./Logo.png");

const UserMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowWidth, serWindowWidth] = useState(window.innerWidth);

  const { user } = useContext(UserContext);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    serWindowWidth(window.innerWidth);
  };

  return windowWidth > 600 ? (
    <StyledUserMenu width={windowWidth} >
      <div>
        <div className="userBox">
          <div>
            <img
              src={
                user?.avatar
                  ? user.avatar
                  : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
              }
              alt="User profile"
            />
          </div>
          <h3>{user?.name ? user.name : "Nome do perfil"}</h3>
        </div>
        <motion.div
          className="expandMenuArrow"
          onClick={() => setOpenMenu(!openMenu)}
          animate={{ rotate: openMenu ? "0deg" : "90deg" }}
        >
          <span>&#x25C0;</span>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            className="menuButtons"
            transition={{ type: "tween", duration: 0.5 }}
            animate={{ y: 0 }}
            exit={{ y: -200 }}
            initial={{ y: -200 }}
          >
            <StyledButton
              width="100%"
              height="36"
              background="--color-salmon"
              fontSize="1.2"
              color="--color-white"
            >
              Editar perfil
            </StyledButton>
            <StyledButton
              width="100%"
              height="36"
              background="--color-salmon"
              fontSize="1.2"
              color="--color-white"
            >
              Cadastrar pet
            </StyledButton>
            <StyledLink
              to="/dashboard/pet"
              width="100%"
              height="36"
              background="--color-salmon"
              fontSize="1.2"
              color="--color-white"
            >
              Meus pets
            </StyledLink>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledUserMenu>
  ) : (
    <StyledUserMenu width={windowWidth} >
      <div>
        <img src={Logo} alt="Logo PetMatch" />
        <motion.div
          className="expandMenuArrow"
          onClick={() => setOpenMenu(!openMenu)}
          animate={{ rotate: openMenu ? "0deg" : "90deg" }}
        >
          <span>&#x25C0;</span>
        </motion.div>
      </div>
      <AnimatePresence mode="wait">
        {openMenu && (
          <motion.div
            className="menuButtons"
            transition={{ type: "tween", duration: 0.5 }}
            animate={{ y: 0 }}
            exit={{ y: -300 }}
            initial={{ y: -300 }}
          >
            <div className="userBox">
              <div>
                <img
                  src={
                    user?.avatar
                      ? user.avatar
                      : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
                  }
                  alt="User profile"
                />
              </div>
              <h3>{user?.name ? user.name : "Nome do perfil"}</h3>
            </div>
            <StyledButton
              width="100%"
              height="36"
              background="--color-salmon"
              fontSize="1"
              color="--color-white"
            >
              Editar perfil
            </StyledButton>
            <StyledButton
              width="100%"
              height="36"
              background="--color-salmon"
              fontSize="1"
              color="--color-white"
            >
              Cadastrar pet
            </StyledButton>
            <StyledLink
              to="/dashboard/pet"
              width="100%"
              height="36"
              background="--color-salmon"
              fontSize="1"
              color="--color-white"
            >
              Meus pets
            </StyledLink>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledUserMenu>
  );
};

export default UserMenu;
