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

### Troubleshooting

If you encounter any issues during the installation process, here are a few troubleshooting tips:

- **Command not found**: If you see a "command not found" error when running `cargo` or `aplang`, ensure that your terminal’s `PATH` environment variable includes the directory where Cargo installs binaries. This is usually `$HOME/.cargo/bin` on Unix-like systems or `%USERPROFILE%\.cargo\bin` on Windows. You may need to add this directory to your `PATH` manually.
  
- **Rust or Cargo not installed**: If Cargo is not installed, double-check that you followed the installation steps correctly. Make sure you have a stable internet connection and that you followed all prompts during installation.

- **Permissions issues**: If you encounter permissions issues, try running the command with `sudo` (on Unix-like systems) or as an administrator (on Windows). However, be cautious with using `sudo` and only use it when necessary.

# Configure Development Envierment


### Step 1: Install Visual Studio Code (VS Code)

Follow the steps below to install VS Code on your system.
#### Install VS Code on Windows

1. **Visit the VS Code download page**: Open your web browser and go to [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download).

2. **Download the installer for Windows**: Click on the "Windows" download link. This will download the installer (`VSCodeSetup-x64-<version>.exe`).

3. **Run the installer**: Once the download is complete, double-click the installer file to run it.

4. **Follow the installation prompts**: 
   - Accept the license agreement and click "Next."
   - Choose the destination folder where you want to install VS Code, or leave it as the default location.
   - Select additional tasks: It is recommended to check the options to "Add to PATH" and "Register code as an editor for supported file types" for easier access.
   - Click "Next," then "Install."

5. **Finish the installation**: Click "Finish" to complete the installation. You can also choose to launch VS Code immediately by checking the "Launch Visual Studio Code" option.

#### Install VS Code on Linux

1. **Visit the VS Code download page**: Open your web browser and go to [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download).

2. **Download the installer for Linux**: 
- If you are using a Debian-based distribution (like Ubuntu), download the `.deb` file.
   - If you are using a Red Hat-based distribution (like Fedora), download the `.rpm` file.

4. **Install VS Code**: 
	- For Debian-based distributions: Open your terminal and run the following command, replacing `<path-to-file>` with the actual path to the downloaded `.deb` file:

	```bash
	sudo dpkg -i <path-to-file>.deb
	sudo apt-get install -f
	 ```

   - For Red Hat-based distributions: Open your terminal and run the following command, replacing `<path-to-file>` with the actual path to the downloaded `.rpm` file:

     ```bash
     sudo rpm -i <path-to-file>.rpm
     ```
4. **Launch VS Code**: You can start VS Code from the applications menu or by typing `code` in your terminal.

#### 1.3 Install VS Code on macOS

1. **Visit the VS Code download page**: Open your web browser and go to [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download).

2. **Download the installer for macOS**: Click on the "macOS" download link. This will download a `.zip` file.

3. **Install VS Code**: 
   - Once the download is complete, open the `.zip` file to extract the contents.
   - Drag the extracted `Visual Studio Code.app` file to your "Applications" folder.

4. **Launch VS Code**: Open your "Applications" folder and double-click on "Visual Studio Code" to launch it. Alternatively, you can use Spotlight (`Cmd + Space`) to search for "Visual Studio Code."

### Step 2: Set Up a Project Directory with a `hello.ap` File

Now that you have VS Code installed, you can set up a project directory and create a `hello.ap` file for use with the `aplang` binary.

#### 2.1 Create a Project Directory

1. **Open your terminal or Command Prompt**: Open your terminal (Linux or macOS) or Command Prompt/PowerShell (Windows).

2. **Navigate to your preferred location**: Use the `cd` (change directory) command to navigate to the location where you want to create your project directory. For example, to navigate to your Documents folder, you can run:

   ```bash
   cd ~/Documents
   ```

   Replace `~/Documents` with the appropriate path on your system.

3. **Create the project directory**: Run the following command to create a new directory called `aplang_project`:

   ```bash
   mkdir aplang_project
   ```

4. **Navigate to the project directory**: Change into the newly created directory:

   ```bash
   cd aplang_project
   ```

#### 2.2 Create the `hello.ap` File

1. **Open VS Code in the project directory**: Run the following command to open VS Code in the current directory:

   ```bash
   code .
   ```

   This will open VS Code with the `aplang_project` directory as the current workspace.

2. **Create a new file**: 
   - In VS Code, click on the "New File" icon in the Explorer sidebar (or use the shortcut `Ctrl+N` on Windows/Linux or `Cmd+N` on macOS).
   - Name the file `hello.ap` by typing the name into the input field and pressing Enter.

3. **Add content to `hello.ap`**: Open the `hello.ap` file by clicking on it in the Explorer sidebar. Add some sample content, such as:

   ```ap
   DISPLAY("Hello, world!")
   ```

   This content is a simple example that prints "Hello, world!" to the screen.

5. **Save the file**: Save your changes by clicking "File" > "Save" in the menu or by using the shortcut `Ctrl+S` on Windows/Linux or `Cmd+S` on macOS.

### Step 3: Run the `hello.ap` File with the `aplang` Binary

Now that you have a `hello.ap` file set up, you can run it using the `aplang` binary.

1. **Open your terminal or Command Prompt**: Make sure your terminal (Linux or macOS) or Command Prompt/PowerShell (Windows) is open.

2. **Navigate to your project directory**: If you are not already in the project directory, use the `cd` command to navigate to it. For example:

   ```bash
   cd ~/Documents/aplang_project
   ```

   Adjust the path as necessary for your system.

3. **Run the `hello.ap` file**: Use the `aplang` binary to run your `hello.ap` file by typing the following command:

   ```bash
   aplang hello.ap
   ```

   If everything is set up correctly, this command will execute the `hello.ap` file, and you should see "Hello, world!" printed to your terminal or command prompt.

### Troubleshooting

If you encounter any issues during this process, here are some troubleshooting tips:

- **VS Code command not found**: If the `code` command is not recognized, ensure that VS Code is added to your system's PATH. On Windows, you can check the box to add VS Code to the PATH during installation. On macOS and Linux, you may need to manually add it to your PATH. Refer to the [VS Code documentation](https://code.visualstudio.com/docs/setup/mac) for detailed instructions.

- **`aplang` command not found**: If the `aplang` command is not recognized, make sure that Cargo is installed correctly and that the directory where Cargo installs binaries (usually `$HOME/.cargo/bin` on Unix-like systems or `%USERPROFILE%\.cargo\bin` on Windows) is included in your PATH.

- **File not found or permission denied**: Ensure that you are in the correct directory and that you have the necessary permissions to run files. Use the `ls` (Linux/macOS) or `dir` (Windows) command to list files in the directory and confirm that `hello.ap` exists.

## Conclusion

You've successfully installed Rust, ApLang, and Visual Studio Code. You set up a project directory, and created a `hello.ap` file for use with the `aplang` binary! You can now start developing more complex programs in `aplang` and explore other features of VS Code to enhance your coding experience.