import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/fonts/material-icon/css/material-design-iconic-font.min.css" />

        <link rel="stylesheet" href="/css/style.css" />
      </Head>

      <main>
      
        <section class="signup">
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Selamat Datang Peserta Intership</h2>
                    <form method="POST" class="register-form" id="register-form">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="name" id="name" placeholder="Nama Lengkap"/>
                        </div>
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div class="form-group">
                            <label for="date"><i class="zmdi zmdi-calendar"></i></label>
                            <input type="date" name="date" id="date" placeholder="Tanggal Lahir" />
                        </div>
                        <div class="form-group">
                            <label for="no.hp"><i class="zmdi zmdi-phone"></i></label>
                            <input type="text" name="no.hp" id="no.hp" placeholder="No. Hp"/>
                        </div>
                        <div class="form-group">
                            <label for="alamat"><i class="zmdi zmdi-home material-icons-name"></i></label>
                            <input type="text" name="alamat" id="alamat" placeholder="Alamat Rumah"/>
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signup" id="signup" class="form-submit" value="Register"/>
                        </div>
                    </form>
                </div>
                <div class="signup-image">
                    <figure><img src="images/signup-image.jpg" alt="sing up image" /></figure>
                </div>
            </div>
        </div>
      </section>
      </main>
    </div>
  )
}
