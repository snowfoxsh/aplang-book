# Install ApLang
## With Cargo (All Platforms)
### Step 1: Install Rust and Cargo

Before you can install `aplang`, you need to have Rust and Cargo installed on your computer. Cargo is the package manager and build system for the Rust programming language, and it comes bundled with Rust.

#### 1.1 Install Rust and Cargo
1. **Visit the Rust installation page**: Open your web browser and go to [https://rustup.rs](https://rustup.rs).

2. **Follow the installation instructions**: The Rust installation page will automatically detect your operating system and provide you with detailed instructions on how to install Rust and Cargo. Follow the instructions provided for your specific operating system (Linux, macOS, or Windows).

3. **Complete the installation**: The installer will guide you through the installation process. Make sure to follow all the steps, including any prompts to modify your system’s `PATH` environment variable. This will ensure that Cargo commands are available in your terminal or command prompt.

4. **Restart your terminal or command prompt**: After installation, restart your terminal (Linux or macOS) or command prompt (Windows) to make sure the changes take effect.

#### 1.2 Verify the Installation

To confirm that Rust and Cargo are installed correctly, open your terminal (Linux or macOS) or Command Prompt/PowerShell (Windows) and run:

```bash
cargo --version
```

If the installation was successful, this command will display the version of Cargo installed, such as `cargo 1.65.0 (0e8d5a6 2022-09-27)`.

### Step 2: Install the `aplang` Binary

Now that you have Cargo installed, you can install the `aplang` binary.

#### 2.1 Install `aplang` Using Cargo

1. **Open your terminal or Command Prompt**: Make sure your terminal (Linux/macOS) or Command Prompt/PowerShell (Windows) is open.

2. **Run the installation command**: Type the following command and press Enter:

   ```bash
   cargo install aplang
   ```

   Cargo will fetch the `aplang` package from the online registry, compile it, and install it on your system. This process may take a few minutes, depending on your internet speed and system performance.

3. **Wait for the installation to complete**: Cargo will display messages as it compiles and installs the binary. Once the process is complete, you should see a message indicating that `aplang` has been installed successfully.

### Step 3: Verify the Installation of `aplang`

After installation, you should verify that `aplang` is correctly installed and can be used as a standalone program.

#### 3.1 Check the Installation

1. **Run the `aplang` command**: In your terminal or Command Prompt, type the following command and press Enter:

   ```bash
   aplang --version
   ```

   If installed correctly, this command will display the version of `aplang` that you installed, confirming that the installation was successful.

### Step 4: Use `aplang` as a Standalone Program

Now that `aplang` is installed, you can use it as a standalone program.

#### 4.1 Running `aplang`

To run `aplang`, simply type `aplang` followed by any arguments or options you want to use. For example:

```bash
aplang --help
```

This command will display the help information for `aplang`, showing you the available commands and options.

## [Troubleshooting](installation.md)